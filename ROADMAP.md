# 개발자 웹 이력서 프로젝트 로드맵

## 프로젝트 개요

HTML, CSS, JavaScript, TailwindCSS를 활용한 반응형 개발자 웹 이력서 사이트

## 기술 스택

| 구분 | 기술 |
|------|------|
| 마크업 | HTML5 |
| 스타일링 | CSS3, TailwindCSS (CDN) |
| 인터랙션 | Vanilla JavaScript |

---

## 페이지 구조

```
index.html (싱글 페이지)
├── Header (네비게이션)
├── Hero 섹션 (프로필 소개)
├── About 섹션 (자기소개)
├── Skills 섹션 (기술 스택)
├── Experience 섹션 (경력사항)
├── Projects 섹션 (프로젝트)
├── Education 섹션 (학력)
├── Contact 섹션 (연락처)
└── Footer
```

---

## 파일 구조

```
/
├── index.html          # 메인 HTML 파일
├── css/
│   └── style.css       # 커스텀 스타일 (TailwindCSS 보완)
├── js/
│   └── main.js         # 인터랙션 및 애니메이션
└── assets/
    └── images/         # 프로필 사진, 프로젝트 이미지 등
```

---

## 단계별 개발 계획

### Phase 1: 프로젝트 초기 설정

- [ ] 프로젝트 폴더 및 파일 구조 생성
- [ ] `index.html` 기본 HTML5 보일러플레이트 작성
- [ ] TailwindCSS CDN 연결
- [ ] 커스텀 CSS 파일 연결
- [ ] JavaScript 파일 연결
- [ ] 파비콘 및 메타 태그 설정

### Phase 2: Header & Hero 섹션

- [ ] 상단 고정 네비게이션 바 구현
- [ ] 각 섹션으로 이동하는 앵커 링크 구성
- [ ] 모바일 햄버거 메뉴 구현 (JavaScript)
- [ ] Hero 영역: 이름, 직함, 한 줄 소개 배치
- [ ] CTA 버튼 (이력서 다운로드 / 연락하기)

### Phase 3: About 섹션

- [ ] 프로필 이미지 영역
- [ ] 자기소개 텍스트 (3~4문장)
- [ ] 간단한 인적사항 (이름, 위치, 이메일 등)
- [ ] 2컬럼 레이아웃 (이미지 + 텍스트)

### Phase 4: Skills 섹션

- [ ] 기술 스택 카테고리별 분류 (Frontend, Backend, Tools 등)
- [ ] 스킬 카드 또는 태그 UI 구현
- [ ] 숙련도 프로그레스 바 (CSS 애니메이션)

### Phase 5: Experience 섹션

- [ ] 타임라인 UI 구현
- [ ] 회사명, 기간, 직책, 주요 업무 표시
- [ ] 각 경력 항목 카드 스타일링

### Phase 6: Projects 섹션

- [ ] 프로젝트 카드 그리드 레이아웃
- [ ] 프로젝트명, 설명, 사용 기술, 링크 표시
- [ ] 호버 효과 및 애니메이션

### Phase 7: Education & Contact 섹션

- [ ] 학력 정보 리스트 구현
- [ ] 연락처 폼 UI (이름, 이메일, 메시지)
- [ ] SNS 링크 아이콘 (GitHub, LinkedIn 등)
- [ ] Footer 저작권 표시

### Phase 8: 인터랙션 & 애니메이션

- [ ] 스크롤 시 네비게이션 활성화 표시
- [ ] 부드러운 스크롤 (Smooth Scroll)
- [ ] 섹션 진입 시 페이드인 애니메이션
- [ ] 스크롤 시 프로그레스 바 숙련도 애니메이션
- [ ] 맨 위로 가기 버튼

### Phase 9: 반응형 & 마무리

- [ ] 모바일 (< 640px) 반응형 최적화
- [ ] 태블릿 (640px ~ 1024px) 반응형 최적화
- [ ] 다크모드 토글 구현
- [ ] 크로스 브라우저 테스트
- [ ] 성능 최적화 (이미지 압축, 로딩 최적화)

---

## 이력서 콘텐츠 (샘플)

### 프로필

| 항목 | 내용 |
|------|------|
| 이름 | 홍길동 |
| 직함 | Frontend Developer |
| 한 줄 소개 | 사용자 경험을 최우선으로 생각하는 프론트엔드 개발자 |
| 위치 | 서울특별시 |
| 이메일 | gildong@example.com |
| GitHub | github.com/gildong |

### 자기소개

> 3년차 프론트엔드 개발자로, 직관적이고 접근성 높은 웹 서비스를 만드는 데 열정을 가지고 있습니다.
> React, TypeScript 기반의 SPA 개발 경험이 풍부하며, UI/UX에 대한 깊은 이해를 바탕으로 사용자 중심의 인터페이스를 구현합니다.

### 기술 스택

| 카테고리 | 기술 |
|----------|------|
| Frontend | HTML, CSS, JavaScript, TypeScript, React, Vue.js |
| Styling | TailwindCSS, Styled-components, SCSS |
| Tools | Git, GitHub, VS Code, Figma |
| Etc | REST API, Firebase, Vercel |

### 경력사항

**ABC 테크놀로지** | 프론트엔드 개발자 | 2022.03 ~ 현재
- 자사 서비스 웹 프론트엔드 개발 및 유지보수
- 디자인 시스템 구축 및 공통 컴포넌트 개발
- 웹 성능 최적화 (Lighthouse 점수 40 → 92 개선)

**XYZ 소프트웨어** | 주니어 개발자 | 2020.06 ~ 2022.02
- 고객사 웹 사이트 퍼블리싱 및 프론트엔드 개발
- jQuery → React 마이그레이션 참여

### 프로젝트

**쇼핑몰 플랫폼**
- 설명: React 기반 이커머스 웹 애플리케이션
- 기술: React, TypeScript, TailwindCSS, Firebase
- 역할: 프론트엔드 전체 개발, 결제 모듈 연동

**포트폴리오 사이트**
- 설명: 개인 포트폴리오 웹 사이트
- 기술: HTML, CSS, JavaScript
- 역할: 기획, 디자인, 개발 전체

### 학력

**한국대학교** | 컴퓨터공학과 | 2016.03 ~ 2020.02

---

## 참고 사항

- TailwindCSS는 CDN 방식으로 사용하여 별도 빌드 도구 없이 개발
- 싱글 페이지 구성으로 별도 라우팅 불필요
- 시맨틱 HTML 태그 적극 활용 (`<header>`, `<section>`, `<article>`, `<footer>`)
- 접근성(a11y) 고려: alt 속성, aria 레이블, 키보드 네비게이션
