/* =====================================================
   Dark Mode Toggle
===================================================== */

(function () {
  const root = document.documentElement;
  const toggleBtn = document.querySelector('.theme-toggle');

  if (!toggleBtn) return;

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const storedTheme = localStorage.getItem('theme');

  // Initialize theme
  if (storedTheme) {
    root.setAttribute('data-theme', storedTheme);
  } else if (prefersDark) {
    root.setAttribute('data-theme', 'dark');
  } else {
    root.setAttribute('data-theme', 'light');
  }

  // Toggle theme
  toggleBtn.addEventListener('click', () => {
    const currentTheme = root.getAttribute('data-theme');
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

    root.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
  });
})();

/* =====================================================
   Scroll Reveal Animation (IntersectionObserver)
===================================================== */

(function () {
  const revealElements = document.querySelectorAll('.card');

  if (!('IntersectionObserver' in window)) {
    // Fallback: show all immediately
    revealElements.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  revealElements.forEach(el => observer.observe(el));
})();
