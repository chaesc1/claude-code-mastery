# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

HTML, CSS, JavaScript, TailwindCSS(CDN)를 활용한 반응형 개발자 웹 이력서 싱글 페이지 사이트.
빌드 도구 없이 정적 파일만으로 구성되며, 브라우저에서 `index.html`을 직접 열어 확인한다.

## 기술 스택

- **마크업**: HTML5 (시맨틱 태그 사용: `<header>`, `<section>`, `<article>`, `<footer>`)
- **스타일링**: TailwindCSS (CDN), 커스텀 CSS (`css/style.css`)
- **인터랙션**: Vanilla JavaScript (`js/main.js`)

## 아키텍처

싱글 페이지(SPA 아님) 구조로, `index.html` 하나에 모든 섹션이 포함된다.
섹션 간 이동은 앵커 링크(`#section-id`)로 처리하며, 별도 라우팅은 없다.

주요 섹션 순서: Header → Hero → About → Skills → Experience → Projects → Education → Contact → Footer

### 파일 역할

| 파일 | 역할 |
|------|------|
| `index.html` | 전체 페이지 구조 및 콘텐츠 |
| `css/style.css` | TailwindCSS로 처리하기 어려운 커스텀 스타일, 애니메이션 키프레임 |
| `js/main.js` | 햄버거 메뉴 토글, 스크롤 이벤트, 페이드인 애니메이션, 다크모드 등 인터랙션 |

## 개발 환경

별도 빌드/설치 명령 없음. 로컬 개발 시 Live Server 등으로 `index.html`을 서빙하면 된다.

```bash
# VS Code Live Server 또는 간단한 HTTP 서버
npx serve .
```

## 언어 및 커뮤니케이션 규칙

- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성
- **변수명/함수명**: 영어 (코드 표준 준수)

## 코딩 컨벤션

- TailwindCSS 유틸리티 클래스를 우선 사용하고, 불가피한 경우에만 `css/style.css`에 커스텀 스타일 추가
- 접근성(a11y) 필수: 이미지에 `alt` 속성, 인터랙티브 요소에 `aria` 레이블, 키보드 네비게이션 지원
- TailwindCSS 반응형 브레이크포인트: `sm`(640px), `md`(768px), `lg`(1024px)
