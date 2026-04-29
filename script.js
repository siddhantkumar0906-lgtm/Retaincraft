document.addEventListener('DOMContentLoaded', () => {
  // ── Smooth scroll for same-page anchor links ──
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        document.querySelector('.mobile-nav')?.classList.remove('active');
      }
    });
  });

  // ── Mobile menu toggle ──
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileClose = document.querySelector('.mobile-nav-close');

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => mobileNav.classList.add('active'));
    mobileClose?.addEventListener('click', () => mobileNav.classList.remove('active'));
  }

  // Close mobile nav on link click
  document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav?.classList.remove('active');
    });
  });

  // ── Scroll reveal animation ──
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  reveals.forEach(el => observer.observe(el));

  // ── Nav background on scroll ──
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      nav.style.background = 'rgba(255, 77, 0, 0.95)';
      nav.style.backdropFilter = 'blur(10px)';
    } else {
      nav.style.background = 'transparent';
      nav.style.backdropFilter = 'none';
    }
  });

  // ── Staggered reveal for grid children ──
  document.querySelectorAll('.problem-card, .process-step, .why-card, .pricing-card, .services-preview-card').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.08}s`;
  });
});
