(function (root) {
  'use strict';
  const messages = {
    AI_NOT_CONFIGURED: 'AI 키가 서버에 설정되지 않았습니다. 관리자 설정이 필요합니다.',
    SITE_RATE_LIMIT: '사이트 요청 제한입니다. 10초 쿨다운 또는 일일 한도(IP 10회/전체 100회)에 도달했습니다.',
    GEMINI_QUOTA: 'Google Gemini의 요청 한도에 도달했거나 이 모델의 무료 할당량이 없습니다. AI Studio의 비율 제한을 확인하세요.',
    GEMINI_ACCESS: 'Google이 API 접근을 거부했습니다. 키 권한과 프로젝트 설정을 확인하세요.',
    GEMINI_CONFIG: 'Google이 API 키 또는 요청 설정을 거부했습니다. 서버 설정 확인이 필요합니다.',
    GEMINI_MODEL: '설정한 Gemini 모델을 사용할 수 없습니다. 무료 사용 가능한 모델을 확인하세요.',
    GEMINI_TIMEOUT: 'Gemini 응답 시간이 초과됐습니다. 자동 재시도는 하지 않습니다.',
    GEMINI_NETWORK: '서버에서 Gemini에 연결하지 못했습니다.',
    GEMINI_RESPONSE: 'Gemini 답변이 비어 있거나 형식이 올바르지 않습니다.',
    GEMINI_UNAVAILABLE: 'Google Gemini 서비스가 일시적으로 응답하지 않습니다.',
    INDEX_TIMEOUT: '서버에서 블로그 검색 자료를 가져오는 시간이 초과됐습니다.',
    INDEX_UNAVAILABLE: '서버에서 블로그 검색 자료를 읽지 못했습니다.',
    LIMITER_UNAVAILABLE: '요청 제한 저장소 오류로 안전하게 AI 호출을 중단했습니다.',
    LOCAL_COOLDOWN: '연속 AI 요청을 줄이기 위해 잠시 기다려 주세요. 일반 검색은 계속 사용할 수 있습니다.',
    NETWORK: 'API에 연결하지 못했습니다. 네트워크·CORS·응답 시간을 확인하세요.',
    UNKNOWN: 'AI 서버 오류입니다. 새 진단 버전이 배포됐는지 확인하세요.'
  };
  function createClient(fetcher = (...args) => fetch(...args), now = () => Date.now()) {
    const cache = new Map(); let pending = false, nextAllowed = 0;
    return async function ask(endpoint, question) {
      const key = JSON.stringify([endpoint, question.trim()]);
      const hit = cache.get(key);
      if (hit && hit.expires > now()) return { data: hit.data, cached: true };
      if (pending || now() < nextAllowed) throw new Error(messages.LOCAL_COOLDOWN);
      pending = true; nextAllowed = now() + 10000;
      try {
        const response = await fetcher(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ question }), signal: AbortSignal.timeout(18000), credentials: 'omit' });
        const data = await response.json().catch(() => ({}));
        if (!response.ok) {
          if (response.status === 429) nextAllowed = Math.max(nextAllowed, now() + 60000);
          const code = Object.hasOwn(messages, data.code) ? data.code : 'UNKNOWN';
          const error = new Error(`${messages[code]} [${code}; HTTP ${response.status}]`);
          error.publicDiagnostic = true;
          throw error;
        }
        if (typeof data.answer !== 'string' || !Array.isArray(data.sources)) throw new Error('invalid response');
        // Successful answers only; memory only in this tab, max 20 entries, five minutes.
        if (cache.size >= 20) cache.delete(cache.keys().next().value);
        cache.set(key, { data, expires: now() + 300000 });
        return { data, cached: false };
      } catch (error) {
        if (error.publicDiagnostic) throw error;
        throw new Error(messages.NETWORK);
      } finally { pending = false; }
    };
  }
  const api = { createClient, messages };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.OasisAI = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
