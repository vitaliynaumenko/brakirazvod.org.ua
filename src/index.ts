import './styles/main.scss';
import { SwiperSlider, SwiperPresets } from './components';
import { initMobileMenu } from './scripts/mobile-menu';

/**
 * Ініціалізація всіх слайдерів на сторінці
 */
function initSliders(): void {
  // ============================================
  // ПРИКЛАД 1: Слайдер відгуків з пресетом
  // ============================================
  const reviewsContainer = document.querySelector('.reviews__list');
  if (reviewsContainer) {
    const reviewsSlider = SwiperSlider.fromPreset(
      '.reviews__list',
      'reviews',
      {
        // Перевизначення опцій пресету
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.reviews__nav-btn--next',
          prevEl: '.reviews__nav-btn--prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
        },
        breakpoints: {
          768: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 4 },
        },
      },
      {
        onInit: (swiper) => {
          console.log('Reviews slider initialized:', swiper.slides.length, 'slides');
        },
        onSlideChange: (swiper) => {
          console.log('Active review:', swiper.activeIndex);
        },
      }
    );

    // Зберігаємо інстанс для доступу ззовні
    (window as any).reviewsSlider = reviewsSlider;
  }

  // ============================================
  // ПРИКЛАД 2: Слайдер команди з пресетом team
  // ============================================
  const teamContainer = document.querySelector('.team-slider');
  if (teamContainer) {
    const teamSlider = SwiperSlider.fromPreset('.team-slider', 'team', {
      slidesPerView: 1,
      spaceBetween: 8,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 8000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.team-slider__nav-btn--next',
        prevEl: '.team-slider__nav-btn--prev',
      },
      breakpoints: {
        768: { slidesPerView: 2, spaceBetween: 8 },
        1200: {
          slidesPerView: 4,
          spaceBetween: 8,
          centeredSlides: false,
        },
      },
    });

    (window as any).teamSlider = teamSlider;
  }

  // ============================================
  // ПРИКЛАД 3: Кастомний слайдер з нуля
  // ============================================
  const customContainer = document.querySelector('.custom-slider');
  if (customContainer) {
    const customSlider = new SwiperSlider({
      container: '.custom-slider',
      modules: ['navigation', 'pagination', 'autoplay', 'effectFade'],
      options: {
        slidesPerView: 1,
        effect: 'fade',
        fadeEffect: { crossFade: true },
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.custom-slider__pagination',
          clickable: true,
          bulletClass: 'custom-slider__bullet',
          bulletActiveClass: 'custom-slider__bullet--active',
        },
        navigation: {
          nextEl: '.custom-slider__next',
          prevEl: '.custom-slider__prev',
        },
      },
      onInit: (swiper) => {
        console.log('Custom slider ready!');
      },
    });

    (window as any).customSlider = customSlider;
  }

  // ============================================
  // ПРИКЛАД 4: Ініціалізація через data-атрибути
  // ============================================
  // HTML: <div class="swiper" data-swiper-preset="cards" data-swiper-autoplay-delay="5000">
  const dataSliders = document.querySelectorAll('[data-swiper-preset]');
  dataSliders.forEach((container) => {
    SwiperSlider.initFromDataAttributes(container as HTMLElement);
  });

  // ============================================
  // ПРИКЛАД 5: Масова ініціалізація однакових слайдерів
  // ============================================
  // const serviceSliders = SwiperSlider.initAll('.service-card__slider', {
  //   modules: ['pagination'],
  //   options: {
  //     slidesPerView: 1,
  //     pagination: { clickable: true },
  //   },
  // });
}

/**
 * Ініціалізація SEO секції з розкриттям/згортанням
 */
function initSeoSection(): void {
  const seoToggle = document.querySelector('.footer__seo-toggle');
  const seoSection = document.querySelector('.footer__seo');
  const seoContent = document.querySelector('.footer__seo-content');

  if (!seoToggle || !seoSection || !seoContent) {
    return;
  }

  seoToggle.addEventListener('click', () => {
    const isExpanded = seoSection.classList.contains('footer__seo--expanded');
    const toggleButton = seoToggle as HTMLButtonElement;

    if (isExpanded) {
      seoSection.classList.remove('footer__seo--expanded');
      toggleButton.setAttribute('aria-expanded', 'false');
      toggleButton.setAttribute('aria-label', 'Розгорнути текст');
    } else {
      seoSection.classList.add('footer__seo--expanded');
      toggleButton.setAttribute('aria-expanded', 'true');
      toggleButton.setAttribute('aria-label', 'Згорнути текст');
    }
  });
}

// Основна ініціалізація
document.addEventListener('DOMContentLoaded', () => {
  console.log('Brakirazvod.org.ua loaded');

  // Ініціалізуємо мобільне меню
  initMobileMenu();

  // Ініціалізуємо слайдери
  initSliders();

  // Ініціалізуємо SEO секцію
  initSeoSection();
});

// Експортуємо для використання в інших модулях
export { SwiperSlider, SwiperPresets };
