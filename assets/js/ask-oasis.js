(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const panel = $('ask-panel');
  if (!panel) return;
  const aliases = {'푸리에':'fourier','변환':'transform','행렬':'matrix','고유값':'eigenvalue','고유벡터':'eigenvector','미분':'derivative','적분':'integral','양자':'quantum','슈뢰딩거':'schrodinger','직교':'orthogonality','역전파':'backpropagation','신경망':'neural network','결정':'crystal','전도':'conductivity'};
  const stop = new Set('a an the is are of in on to for and or how what which me find posts articles about explain'.split(' '));
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
  function words(q) {
    let s = q.toLowerCase();
    for (const [ko, en] of Object.entries(aliases)) if (s.includes(ko)) s += ' ' + en;
    return [...new Set(s.match(/[\p{L}\p{N}]+/gu) || [])].filter(w => w.length > 1 && !stop.has(w));
  }
  function rank(posts, question) {
    const tokens = words(question);
    return posts.map(p => {
      const title = String(p.title).toLowerCase(), text = String(p.text).toLowerCase();
      return {...p, score: tokens.reduce((n,w) => n + (title.includes(w) ? 8 : 0) + (text.includes(w) ? 1 : 0), 0)};
    }).filter(p => p.score > 0).sort((a,b) => b.score-a.score).slice(0,5);
  }
  function show(posts) {
    $('ask-results').replaceChildren();
    if (!posts.length) { const p=document.createElement('p'); p.textContent='No matching posts found. Try a shorter keyword or an English term.'; $('ask-results').append(p); }
    for (const post of posts) {
      const url = new URL(post.url, location.origin);
      if (url.origin !== location.origin) continue;
      const article=document.createElement('article'), a=document.createElement('a'), p=document.createElement('p');
      a.href=url.href; a.textContent=post.title; p.textContent=String(post.description || post.text).slice(0,190);
      article.append(a,p); $('ask-results').append(article);
    }
  }
  $('ask-form').addEventListener('submit', async e => {
    e.preventDefault();
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
          const r=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({question}),signal:AbortSignal.timeout(18000),credentials:'omit'});
          if(!r.ok) throw Error('unavailable');
          const data=await r.json();
          if(typeof data.answer!=='string') throw Error('response');
          if(Array.isArray(data.sources) && data.sources.length) show(data.sources);
          const p=document.createElement('p'); p.className='ask-answer'; p.textContent=data.answer; $('ask-results').prepend(p);
          $('ask-status').textContent='AI can make mistakes. Check the linked articles.';
        } catch (_) { $('ask-status').textContent='AI is unavailable or its limit was reached. Blog search results are shown instead.'; }
      }
    } catch (_) { $('ask-status').textContent='Search could not load. Please try again or use the Archive page.'; }
    finally { $('ask-submit').disabled=false; }
  });
})();
