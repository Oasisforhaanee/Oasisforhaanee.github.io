/* Local concept search only: no translation API, no article rewriting. */
(function (root) {
  'use strict';
  // Each row is a concept, with English, Korean, Chinese (simplified/traditional)
  // and Japanese spellings. Add new domain vocabulary here as the blog grows.
  const concepts = [
    ['fourier transform','푸리에 변환','푸리에변환','フーリエ変換','傅里叶变换','傅立叶变换','傅立葉變換'],
    ['fourier','푸리에','フーリエ','傅里叶','傅立叶','傅立葉'],
    ['legendre','르장드르','ルジャンドル','勒让德','勒讓德'],
    ['matrix','matrices','행렬','行列','矩阵','矩陣'],
    ['determinant','행렬식','行列式'],
    ['eigenvalue','고유값','固有値','特征值','特徵值'],
    ['eigenvector','고유벡터','고유 벡터','固有ベクトル','特征向量','特徵向量'],
    ['eigenmodes','normal modes','고유모드','고유 모드','정규모드','정상모드','固有モード','基準振動','简正模','簡正模'],
    ['vibration modes','진동 모드','振動モード','振动模式','振動模式'],
    ['coupled pendulums','결합 진자','연성 진자','連成振り子','耦合摆','耦合擺'],
    ['orthogonality','orthogonal','직교','직교성','直交','正交'],
    ['inner product','내적','内積','内积','內積'],
    ['linear independence','선형 독립','일차 독립','線形独立','一次独立','线性无关','線性無關'],
    ['linear dependence','선형 종속','일차 종속','線形従属','一次従属','线性相关','線性相關'],
    ['vector','벡터','ベクトル','向量'],
    ['equation of a plane','평면의 방정식','평면 방정식','平面の方程式','平面方程'],
    ['complex plane','복소평면','복소 평면','複素平面','复平面','複平面'],
    ['lagrange multipliers','라그랑주 승수','라그랑주 미정계수','ラグランジュの未定乗数','ラグランジュ乗数','拉格朗日乘数','拉格朗日乘數'],
    ['partial derivatives','partial derivative','편미분','偏微分','偏导数','偏導數'],
    ['derivative','derivatives','미분','微分','导数','導數'],
    ['integral','integration','적분','積分','积分'],
    ['gradient','기울기','그래디언트','勾配','梯度'],
    ['chain rule','연쇄법칙','연쇄 법칙','連鎖律','合成関数の微分','链式法则','鏈式法則'],
    ['divergence','발산','発散','散度'],
    ['curl','회전','컬','回転','旋度'],
    ['quantum mechanics','양자역학','양자 역학','量子力学','量子力學'],
    ['quantum','양자','量子'],
    ['schrodinger','슈뢰딩거','슈뢰딩어','シュレーディンガー','薛定谔','薛定諤'],
    ['wave function','파동함수','파동 함수','波動関数','波函数','波函數'],
    ['stationary state','stationary states','정상상태','정상 상태','定常状態','定态','定態'],
    ['hydrogen atom','수소 원자','水素原子','氢原子','氫原子'],
    ['orbital','오비탈','궤도함수','原子軌道','原子轨道'],
    ['antibonding orbital','반결합 오비탈','반결합 궤도','反結合性軌道','反键轨道','反鍵軌道'],
    ['bonding orbital','결합 오비탈','결합 궤도','結合性軌道','成键轨道','成鍵軌道'],
    ['bra ket','브라켓','브라 켓','ブラケット','狄拉克符号','狄拉克符號'],
    ['spherical coordinates','구면좌표','구면 좌표','球面座標','球坐标','球座標'],
    ['cartesian','직교좌표','데카르트','デカルト','笛卡尔','笛卡爾'],
    ['phonon','phonons','포논','포논들','フォノン','声子','聲子'],
    ['lattice vibration','격자 진동','格子振動','晶格振动','晶格振動'],
    ['heat capacity','비열','열용량','熱容量','比熱','热容','比热','熱容'],
    ['einstein','아인슈타인','アインシュタイン','爱因斯坦','愛因斯坦'],
    ['debye','디바이','데바이','デバイ','德拜'],
    ['crystal','결정','結晶','晶体','晶體'],
    ['reciprocal lattice','역격자','역 격자','逆格子','倒格子','倒易晶格'],
    ['reciprocal space','역공간','역 공간','逆空間','倒易空间','倒易空間'],
    ['fcc','face centered cubic','면심입방','面心立方'],
    ['x ray diffraction','엑스선 회절','x선 회절','X線回折','X射线衍射','X射線衍射'],
    ['group velocity','군속도','군 속도','群速度','群速'],
    ['effective mass','유효질량','유효 질량','有効質量','有效质量','有效質量'],
    ['holes','hole','정공','正孔','空穴','電洞'],
    ['fermi level','페르미 준위','페르미 에너지','フェルミ準位','费米能级','費米能級'],
    ['density of states','dos','상태밀도','상태 밀도','状態密度','态密度','態密度'],
    ['boson','bosons','보손','ボース粒子','ボソン','玻色子'],
    ['fermion','fermions','페르미온','フェルミ粒子','フェルミオン','费米子','費米子'],
    ['hall effect','홀 효과','ホール効果','霍尔效应','霍爾效應'],
    ['electric field','전기장','전계','電場','電界','电场'],
    ['potential','전위','퍼텐셜','ポテンシャル','電位','电势','電勢','势能','勢能'],
    ['electrostatics','정전기학','정전기','静電気','静电学','靜電學'],
    ['electrical conductivity','conductivity','전기전도도','전기 전도도','전도도','電気伝導率','电导率','電導率'],
    ['drude','드루드','ドルーデ','德鲁德','德魯德'],
    ['energy band','band','에너지밴드','에너지 밴드','띠구조','バンド','能带','能帶'],
    ['bloch','블로흐','블로크','ブロッホ','布洛赫'],
    ['born von karman','보른 폰 카르만','ボルン フォン カルマン','玻恩 冯 卡门','玻恩 馮 卡門'],
    ['boundary condition','경계조건','경계 조건','境界条件','边界条件','邊界條件'],
    ['periodic potential','주기 퍼텐셜','주기적 퍼텐셜','周期ポテンシャル','周期势','週期勢'],
    ['multipole expansion','다중극 전개','다극 전개','多重極展開','多极展开','多極展開'],
    ['neural network','neural networks','신경망','ニューラルネットワーク','神经网络','神經網絡','神經網路'],
    ['artificial neural networks','ann','인공신경망','인공 신경망','人工ニューラルネットワーク','人工神经网络','人工神經網路'],
    ['recurrent neural networks','rnn','순환신경망','순환 신경망','リカレントニューラルネットワーク','再帰型ニューラルネットワーク','循环神经网络','循環神經網絡'],
    ['backpropagation','back propagation','역전파','誤差逆伝播','逆伝播','反向传播','反向傳播'],
    ['temperature','온도','温度','溫度']
  ];
  const stop = new Set('a an the is are of in on to for and or how what which me find posts articles about explain'.split(' '));
  function normalize(s) {
    return String(s || '').normalize('NFKC').toLowerCase().normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '').normalize('NFC')
      .replace(/[^\p{L}\p{N}]+/gu, ' ').trim().replace(/\s+/g, ' ');
  }
  function has(text, term) {
    // CJK terms may have spaces, particles, or occur inside an unsegmented question.
    if (/[^\x00-\x7f]/.test(term)) return text.replace(/\s/g, '').includes(term.replace(/\s/g, ''));
    return (` ${text} `).includes(` ${term} `);
  }
  const groups = concepts.map(row => [...new Set(row.map(normalize))]);
  function analyze(question) {
    const q = normalize(question).slice(0, 2000);
    const matches = groups.filter(group => group.some(term => has(q, term)));
    const tokens = [...new Set(q.match(/[\p{L}\p{N}]+/gu) || [])].filter(t => t.length > 1 && !stop.has(t));
    return { matches, tokens };
  }
  function rank(posts, question) {
    const { matches, tokens } = analyze(question);
    return posts.map(p => {
      const title = normalize(p.title), text = normalize(`${p.description || ''} ${p.text || ''}`);
      const conceptScore = matches.reduce((n, group) => n + (group.some(t => has(title, t)) ? 20 : group.some(t => has(text, t)) ? 2 : 0), 0);
      const wordScore = tokens.reduce((n, word) => n + (has(title, word) ? 8 : has(text, word) ? 1 : 0), 0);
      return { ...p, score: conceptScore + wordScore };
    }).filter(p => p.score > 0).sort((a, b) => b.score - a.score).slice(0, 5);
  }
  const api = { rank, normalize, analyze, concepts };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.OasisSearch = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
