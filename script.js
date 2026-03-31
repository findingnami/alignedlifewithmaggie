/* ==============================
   SMOOTH SCROLL & FADE-ON-SCROLL
   ============================== */

document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Smooth scrolling for menu links (header + buttons + footer menu)
  const menuLinks = document.querySelectorAll(
    '.navigation a, #btn-about, #bookacall, #btn-social, #btn-footer, .footer-menu a'
  );

  menuLinks.forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith("#")) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // adjust for sticky header
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // 2. Fade-in on scroll
  const fadeElements = document.querySelectorAll('.fade-on-scroll');

  const fadeOnScroll = () => {
    const windowBottom = window.innerHeight + window.scrollY;

    fadeElements.forEach(el => {
      const elementTop = el.offsetTop + 100; // trigger a bit before
      if (windowBottom > elementTop) {
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
        el.style.transition = 'opacity 1s ease, transform 1s ease';
      }
    });
  };

  // Initialize all fade elements hidden
  fadeElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(50px)';
  });

  window.addEventListener('scroll', fadeOnScroll);
  fadeOnScroll(); // trigger on load in case some elements are already visible

  // 3. Header shadow effect on scroll
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});