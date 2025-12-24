// ==========================================================================
// Mobile Menu Toggle - Creative Satu Style Menu
// ==========================================================================

/**
 * Initialize mobile menu functionality
 */
export function initMobileMenu(): void {
  const header = document.querySelector('.header');
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const menuClose = document.querySelector('[data-menu-close]');
  const menuOverlay = document.querySelector('[data-menu-overlay]');
  const navLinks = document.querySelectorAll('.header__nav-link');

  if (!header || !menuToggle) {
    return;
  }

  /**
   * Open mobile menu
   */
  function openMenu(): void {
    header?.classList.add('header--menu-open');
    (menuToggle as HTMLButtonElement)?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  /**
   * Close mobile menu
   */
  function closeMenu(): void {
    header?.classList.remove('header--menu-open');
    (menuToggle as HTMLButtonElement)?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  /**
   * Toggle menu state
   */
  function toggleMenu(): void {
    if (header?.classList.contains('header--menu-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  // Toggle menu on phone icon click
  menuToggle.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleMenu();
  });

  // Close menu on close button click
  if (menuClose) {
    menuClose.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeMenu();
    });
  }

  // Close menu on overlay click
  if (menuOverlay) {
    menuOverlay.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeMenu();
    });
  }

  // Close menu on nav link click (mobile only)
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 1200) {
        closeMenu();
      }
    });
  });

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && header?.classList.contains('header--menu-open')) {
      closeMenu();
    }
  });

  // Close menu on window resize (if desktop)
  let resizeTimer: ReturnType<typeof setTimeout>;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (window.innerWidth >= 1200) {
        closeMenu();
      }
    }, 250);
  });
}

