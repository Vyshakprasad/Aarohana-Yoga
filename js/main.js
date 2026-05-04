/* ============================================================
   AAROHANA YOGA — Shared JS
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Sticky nav shadow on scroll
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 30);
    });
  }

  // ── Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach(el => observer.observe(el));
  }

  // ── Mobile menu
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
    document.addEventListener('click', (e) => {
      if (mobileMenu.classList.contains('open') &&
          !mobileMenu.contains(e.target) &&
          !hamburger.contains(e.target)) {
        mobileMenu.classList.remove('open');
      }
    });
  }

  // ── Active nav link (highlight current page)
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.includes(currentPage) && !href.includes('#')) {
      link.classList.add('active');
    }
  });

  // ── WhatsApp tooltip — show for 5s on every page load
  const waTooltip = document.getElementById('waTooltip');
  if (waTooltip) {
    setTimeout(() => {
      waTooltip.classList.add('visible');
      setTimeout(() => {
        waTooltip.classList.remove('visible');
      }, 5000);
    }, 1500);
  }

});
