const test = require('node:test');
const assert = require('node:assert/strict');
const { createClient } = require('../assets/js/ask-ai-client.js');
// MOCK fetch only; never sends AI requests.
test('same question reused for five minutes, then refreshed', async () => {
  let time = 100000, calls = 0;
  const ask = createClient(async () => { calls++; return Response.json({ answer: 'Mock answer', sources: [] }); }, () => time);
  assert.equal((await ask('https://test','Fourier')).cached, false);
  assert.equal((await ask('https://test','Fourier')).cached, true);
  assert.equal(calls, 1);
  time += 300001;
  assert.equal((await ask('https://test','Fourier')).cached, false);
  assert.equal(calls, 2);
});
test('quota diagnosis is explicit, no retry, immediate repeated request blocked', async () => {
  let calls = 0;
  const ask = createClient(async () => { calls++; return Response.json({ code:'GEMINI_QUOTA', error:'SECRET_DO_NOT_SHOW' }, { status:429 }); });
  await assert.rejects(ask('https://test','q'), e => e.message.includes('GEMINI_QUOTA') && !e.message.includes('SECRET'));
  await assert.rejects(ask('https://test','q'));
  assert.equal(calls, 1);
});
test('in-flight duplicate request blocked', async () => {
  let resolve;
  const ask = createClient(() => new Promise(r => { resolve = r; }));
  const first = ask('https://test','q');
  await assert.rejects(ask('https://test','q'));
  resolve(Response.json({ answer:'Mock',sources:[] }));
  await first;
});
test('failures never cached and unknown server text not rendered', async () => {
  let time=100000, calls=0;
  const ask = createClient(async () => { calls++; return Response.json({ code:'unexpected',error:'SECRET' }, { status:503 }); }, () => time);
  await assert.rejects(ask('https://test','q'), e => e.message.includes('UNKNOWN') && !e.message.includes('SECRET'));
  time+=11000;
  await assert.rejects(ask('https://test','q'));
  assert.equal(calls,2);
});
