const test = require('node:test');
const assert = require('node:assert/strict');
const { rank, concepts, normalize } = require('../assets/js/ask-search.js');

// Synthetic unit fixtures: browser integration separately uses the live blog index.
for (const row of concepts) {
  test(`concept aliases: ${row[0]}`, () => {
    const posts = [{ title: row[0], text: '', url: '/concept/' }];
    for (const alias of row) assert.equal(rank(posts, alias)[0]?.url, '/concept/', alias);
  });
}
test('Korean spacing, Japanese sentences, Chinese and mixed case', () => {
  const posts = [{ title: 'Fourier Transform', text: '', url: '/fourier/' }];
  for (const q of ['푸리에변환을 알려줘', '푸리에 변환', 'フーリエ変換について', '傅里叶变换', '傅立葉變換', 'Ｆｏｕｒｉｅｒ transform']) {
    assert.equal(rank(posts, q)[0]?.url, '/fourier/');
  }
});
test('accents and hyphens normalized; English word boundaries avoid false matches', () => {
  assert.equal(normalize('Schrödinger — Bra-Ket'), 'schrodinger bra ket');
  assert.equal(rank([{ title: 'Shallow water', text: '', url: '/water/' }], 'hall').length, 0);
});
test('empty, unrelated, stopwords and bounded results', () => {
  const posts = Array.from({ length: 9 }, (_, i) => ({ title: 'Matrix', text: '', url: `/${i}/` }));
  for (const q of ['', '   ', 'the and', '바나나', '香蕉', 'バナナ']) assert.deepEqual(rank(posts, q), []);
  assert.equal(rank(posts, '행렬').length, 5);
});
test('ranking prioritizes concept in title; input posts are not mutated', () => {
  const posts = [{ title: 'Unrelated', text: 'eigenvalue', url: '/body/' }, { title: 'Eigenvalue & Eigenvector', text: '', url: '/title/' }];
  const copy = structuredClone(posts);
  for (const q of ['고유값', '特征值', '固有値']) assert.equal(rank(posts, q)[0].url, '/title/');
  assert.deepEqual(posts, copy);
});
