(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const panel = $('ask-panel');
  if (!panel) return;
  const rank = globalThis.OasisSearch.rank;
  const askAI = globalThis.OasisAI.createClient();
  let indexPromise, endpoint = '';
  function open(value) { panel.hidden = !value; $('ask-toggle').setAttribute('aria-expanded', String(value)); (value ? $('ask-question') : $('ask-toggle')).focus(); }
  $('ask-toggle').onclick = () => open(panel.hidden);
  $('ask-close').onclick = () => open(false);
  panel.addEventListener('keydown', e => { if (e.key === 'Escape') open(false); });
  fetch('/assets/ask-config.json').then(r => { if (!r.ok) throw Error(); return r.json(); }).then(c => {
    if (c.endpoint && new URL(c.endpoint).protocol === 'https:') {
      endpoint = c.endpoint; $('ask-ai').disabled = false;
      $('ask-status').textContent = 'AI is optional and limited. Do not enter personal information.';
    }
  }).catch(() => {});
  function show(posts) {
    $('ask-results').replaceChildren();
    if (!posts.length) { const p=document.createElement('p'); p.textContent='No matching posts found. Try a shorter keyword or an English term.'; $('ask-results').append(p); }
    for (const post of posts) {
      const url = new URL(post.url, location.origin);
      if (url.origin !== location.origin) continue;
      const article=document.createElement('article'), a=document.createElement('a'), p=document.createElement('p');
      a.href=url.href; a.textContent=post.title; p.textContent=String(post.description || post.text || '').slice(0,190);
      article.append(a,p); $('ask-results').append(article);
    }
  }
  $('ask-form').addEventListener('submit', async e => {
    e.preventDefault();
    if ($('ask-submit').disabled) return;
    const question=$('ask-question').value.trim();
    if (!question || question.length>500) return;
    $('ask-submit').disabled=true; $('ask-status').textContent='Searching…';
    try {
      if (!indexPromise) indexPromise=fetch('/assets/ask-index.json').then(r => { if(!r.ok) throw Error('index'); return r.json(); }).catch(e => { indexPromise=null; throw e; });
      const posts=await indexPromise;
      show(rank(posts,question));
      $('ask-status').textContent='Blog search results. AI was not used.';
      if (endpoint && $('ask-ai').checked) {
        $('ask-status').textContent='Generating an AI summary…';
        try {
          const { data, cached } = await askAI(endpoint, question);
          if(Array.isArray(data.sources) && data.sources.length) show(data.sources);
          const p=document.createElement('p'); p.className='ask-answer'; p.textContent=data.answer; $('ask-results').prepend(p);
          $('ask-status').textContent=cached ? '최근 답변을 재사용했습니다. AI를 추가 호출하지 않았습니다.' : 'AI can make mistakes. Check the linked articles.';
        } catch (error) { $('ask-status').textContent=error.message + ' 블로그 검색 결과는 계속 이용할 수 있습니다.'; }
      }
    } catch (_) { $('ask-status').textContent='Search could not load. Please try again or use the Archive page.'; }
    finally { $('ask-submit').disabled=false; }
  });
})();
