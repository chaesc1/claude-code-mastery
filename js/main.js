'use strict';

// ===================================
// DOM 요소 캐싱
// ===================================
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const darkModeToggle = document.getElementById('darkModeToggle');
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');
const backToTopBtn = document.getElementById('backToTop');
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');
const fadeElements = document.querySelectorAll('.fade-in');
const progressBars = document.querySelectorAll('.progress-bar-inner');
const tickerTrack = document.querySelector('.ticker-track');
const statElements = document.querySelectorAll('[data-count]');

// ===================================
// 다크모드
// ===================================

/** 다크모드 아이콘 상태 업데이트 */
function updateDarkModeIcon() {
  const isDark = document.documentElement.classList.contains('dark');
  // 다크모드일 때 해 아이콘 표시 (라이트로 전환 의미)
  sunIcon.classList.toggle('hidden', !isDark);
  // 라이트모드일 때 달 아이콘 표시 (다크로 전환 의미)
  moonIcon.classList.toggle('hidden', isDark);
}

/** 다크모드 초기화 (플래시 방지는 head 인라인 스크립트에서 처리) */
function initDarkMode() {
  updateDarkModeIcon();
}

/** 다크모드 토글 */
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateDarkModeIcon();
}

// ===================================
// 햄버거 메뉴
// ===================================

/** 모바일 메뉴 토글 */
function toggleMobileMenu() {
  const isOpen = mobileMenu.classList.contains('open');

  if (isOpen) {
    mobileMenu.classList.remove('open');
    hamburgerBtn.classList.remove('hamburger-active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    hamburgerBtn.setAttribute('aria-label', '메뉴 열기');
  } else {
    mobileMenu.classList.add('open');
    hamburgerBtn.classList.add('hamburger-active');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    hamburgerBtn.setAttribute('aria-label', '메뉴 닫기');
  }
}

/** 모바일 메뉴 닫기 */
function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  hamburgerBtn.classList.remove('hamburger-active');
  hamburgerBtn.setAttribute('aria-expanded', 'false');
  hamburgerBtn.setAttribute('aria-label', '메뉴 열기');
}

// ===================================
// 스크롤 스파이 (활성 네비게이션)
// ===================================

/** 현재 스크롤 위치에 해당하는 섹션의 네비게이션 링크 활성화 */
function handleScrollSpy() {
  const headerHeight = 80;
  let currentSection = '';

  sections.forEach(function (section) {
    const rect = section.getBoundingClientRect();
    if (rect.top <= headerHeight && rect.bottom > headerHeight) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(function (link) {
    link.classList.remove('active');
    if (link.getAttribute('data-section') === currentSection) {
      link.classList.add('active');
    }
  });
}

// ===================================
// 맨 위로 가기 버튼
// ===================================

/** 스크롤 위치에 따라 맨 위로 버튼 표시/숨김 */
function toggleBackToTopButton() {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
}

/** 페이지 최상단으로 부드럽게 스크롤 */
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===================================
// 섹션 페이드인 애니메이션 (Intersection Observer)
// ===================================

/** 스크롤 시 요소가 뷰포트에 진입하면 페이드인 */
function initFadeInObserver() {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // 한 번만 실행
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  fadeElements.forEach(function (el) {
    observer.observe(el);
  });
}

// ===================================
// 스킬 프로그레스 바 애니메이션 (Intersection Observer)
// ===================================

/** 스크롤 시 프로그레스 바가 뷰포트에 진입하면 너비 애니메이션 */
function initProgressBarObserver() {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var bar = entry.target;
        var targetWidth = bar.getAttribute('data-width');
        bar.style.width = targetWidth + '%';
        observer.unobserve(bar); // 한 번만 실행
      }
    });
  }, {
    threshold: 0.5
  });

  progressBars.forEach(function (bar) {
    observer.observe(bar);
  });
}

// ===================================
// 기술 스택 티커 호버 시 일시 정지
// ===================================

/** 마우스 호버 시 티커 애니메이션 일시정지 */
function initTickerPauseOnHover() {
  if (!tickerTrack) return;
  tickerTrack.addEventListener('mouseenter', function () {
    tickerTrack.style.animationPlayState = 'paused';
  });
  tickerTrack.addEventListener('mouseleave', function () {
    tickerTrack.style.animationPlayState = 'running';
  });
}

// ===================================
// 통계 숫자 카운트업 애니메이션
// ===================================

/** 스크롤 시 통계 숫자가 뷰포트에 진입하면 카운트업 */
function initStatsCounterObserver() {
  if (statElements.length === 0) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var el = entry.target;
        var target = parseInt(el.getAttribute('data-count'), 10);
        var suffix = el.getAttribute('data-suffix') || '';
        var duration = 1500;
        var startTime = null;

        function animate(timestamp) {
          if (!startTime) startTime = timestamp;
          var progress = Math.min((timestamp - startTime) / duration, 1);
          var current = Math.floor(progress * target);
          el.textContent = current + suffix;
          if (progress < 1) {
            window.requestAnimationFrame(animate);
          } else {
            el.textContent = target + suffix;
          }
        }
        window.requestAnimationFrame(animate);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statElements.forEach(function (el) {
    observer.observe(el);
  });
}

// ===================================
// Contact 폼 처리
// ===================================

/** 폼 제출 시 감사 메시지 표시 (백엔드 없음) */
function handleFormSubmit(e) {
  e.preventDefault();

  // 폼 숨기고 성공 메시지 표시
  contactForm.classList.add('hidden');
  formSuccess.classList.remove('hidden');

  // 3초 후 폼 초기화 및 재표시
  setTimeout(function () {
    contactForm.reset();
    contactForm.classList.remove('hidden');
    formSuccess.classList.add('hidden');
  }, 3000);
}

// ===================================
// 스크롤 이벤트 쓰로틀링
// ===================================

/** requestAnimationFrame 기반 스크롤 핸들러 */
var scrollTicking = false;

function onScroll() {
  if (!scrollTicking) {
    window.requestAnimationFrame(function () {
      handleScrollSpy();
      toggleBackToTopButton();
      scrollTicking = false;
    });
    scrollTicking = true;
  }
}

// ===================================
// 초기화 및 이벤트 리스너 등록
// ===================================

document.addEventListener('DOMContentLoaded', function () {
  // 다크모드 초기화
  initDarkMode();

  // Intersection Observer 초기화
  initFadeInObserver();
  initProgressBarObserver();
  initStatsCounterObserver();

  // 티커 호버 일시정지 초기화
  initTickerPauseOnHover();

  // 다크모드 토글
  darkModeToggle.addEventListener('click', toggleDarkMode);

  // 햄버거 메뉴 토글
  hamburgerBtn.addEventListener('click', toggleMobileMenu);

  // 모바일 메뉴 내 링크 클릭 시 메뉴 닫기
  var mobileMenuLinks = mobileMenu.querySelectorAll('a');
  mobileMenuLinks.forEach(function (link) {
    link.addEventListener('click', closeMobileMenu);
  });

  // 맨 위로 가기 버튼
  backToTopBtn.addEventListener('click', scrollToTop);

  // 스크롤 이벤트 (네비게이션 활성화 + 맨 위로 버튼)
  window.addEventListener('scroll', onScroll);

  // Contact 폼 제출 처리
  contactForm.addEventListener('submit', handleFormSubmit);
});
