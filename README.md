# 내 GitHub 블로그

GitHub Pages + Jekyll(minima 테마)로 만든 블로그입니다.

## 사이트 주소
```
https://<본인 GitHub 아이디>.github.io
```

## 글 쓰는 법
1. `_posts` 폴더에 파일 추가: `YYYY-MM-DD-영문슬러그.md`
   - 예: `2026-07-12-my-first-post.md`
2. 파일 맨 위에 머리말(front matter) 작성:

   ```yaml
   ---
   layout: post
   title: "글 제목"
   date: 2026-07-12 12:00:00 +0900
   categories: 잡담
   ---
   ```

3. 본문을 마크다운으로 작성
4. 커밋 & 푸시 → 자동 빌드되어 블로그에 반영 (보통 1~2분 소요)

## 로컬에서 미리보기 (선택)
Ruby가 설치돼 있다면:
```bash
gem install bundler jekyll
bundle init
bundle add github-pages
bundle exec jekyll serve
# 브라우저에서 http://localhost:4000 접속
```

## 설정 바꾸기
- `_config.yml` : 사이트 제목, 설명, 소셜 링크 등
- `about.md` : 소개 페이지 내용
- 테마 변경은 `_config.yml` 의 `theme:` 값을 바꾸면 됩니다
  (예: `jekyll-theme-cayman`, `jekyll-theme-architect` 등)
