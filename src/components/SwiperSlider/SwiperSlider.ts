import Swiper from 'swiper';
import type { SwiperOptions } from 'swiper/types';
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  EffectCoverflow,
  EffectCards,
  EffectCreative,
  Thumbs,
  FreeMode,
  Grid,
  Scrollbar,
  Mousewheel,
  Keyboard,
  A11y,
} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-creative';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/grid';
import 'swiper/css/scrollbar';

/**
 * Доступні модулі для підключення
 */
export type SwiperModuleName =
  | 'navigation'
  | 'pagination'
  | 'autoplay'
  | 'effectFade'
  | 'effectCoverflow'
  | 'effectCards'
  | 'effectCreative'
  | 'thumbs'
  | 'freeMode'
  | 'grid'
  | 'scrollbar'
  | 'mousewheel'
  | 'keyboard'
  | 'a11y';

/**
 * Мапа модулів
 */
const modulesMap = {
  navigation: Navigation,
  pagination: Pagination,
  autoplay: Autoplay,
  effectFade: EffectFade,
  effectCoverflow: EffectCoverflow,
  effectCards: EffectCards,
  effectCreative: EffectCreative,
  thumbs: Thumbs,
  freeMode: FreeMode,
  grid: Grid,
  scrollbar: Scrollbar,
  mousewheel: Mousewheel,
  keyboard: Keyboard,
  a11y: A11y,
} as const;

/**
 * Конфігурація для SwiperSlider
 */
export interface SwiperSliderConfig {
  /** Селектор або HTML елемент контейнера */
  container: string | HTMLElement;
  /** Масив модулів для підключення */
  modules?: SwiperModuleName[];
  /** Swiper опції */
  options?: SwiperOptions;
  /** Колбек після ініціалізації */
  onInit?: (swiper: Swiper) => void;
  /** Колбек при зміні слайду */
  onSlideChange?: (swiper: Swiper) => void;
}

/**
 * Пресети для швидкого налаштування
 */
export const SwiperPresets = {
  /** Базовий слайдер з навігацією та пагінацією */
  basic: {
    modules: ['navigation', 'pagination'] as SwiperModuleName[],
    options: {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      pagination: {
        clickable: true,
      },
    } as SwiperOptions,
  },

  /** Карусель для карток */
  cards: {
    modules: ['navigation', 'pagination', 'autoplay'] as SwiperModuleName[],
    options: {
      slidesPerView: 'auto' as const,
      spaceBetween: 16,
      centeredSlides: false,
      loop: false,
      breakpoints: {
        320: { slidesPerView: 1.2, spaceBetween: 12 },
        480: { slidesPerView: 1.5, spaceBetween: 16 },
        768: { slidesPerView: 2.5, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 24 },
        1280: { slidesPerView: 4, spaceBetween: 30 },
      },
    } as SwiperOptions,
  },

  /** Відгуки */
  reviews: {
    modules: ['navigation', 'pagination', 'autoplay', 'a11y'] as SwiperModuleName[],
    options: {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      pagination: {
        clickable: true,
        dynamicBullets: true,
      },
      breakpoints: {
        768: { slidesPerView: 2, spaceBetween: 24 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
      },
    } as SwiperOptions,
  },

  /** Команда / Аватари */
  team: {
    modules: ['navigation', 'autoplay'] as SwiperModuleName[],
    options: {
      slidesPerView: 1,
      spaceBetween: 8,
      centeredSlides: true,
      loop: true,
    } as SwiperOptions,
  },

  /** Fade ефект для героїв / банерів */
  hero: {
    modules: ['autoplay', 'effectFade', 'pagination'] as SwiperModuleName[],
    options: {
      slidesPerView: 1,
      effect: 'fade' as const,
      fadeEffect: { crossFade: true },
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        clickable: true,
      },
    } as SwiperOptions,
  },

  /** Галерея з ефектом карток */
  gallery: {
    modules: ['effectCards', 'navigation'] as SwiperModuleName[],
    options: {
      effect: 'cards' as const,
      grabCursor: true,
      cardsEffect: {
        slideShadows: true,
        perSlideOffset: 8,
        perSlideRotate: 2,
      },
    } as SwiperOptions,
  },

  /** Вертикальний слайдер */
  vertical: {
    modules: ['navigation', 'pagination', 'mousewheel'] as SwiperModuleName[],
    options: {
      direction: 'vertical' as const,
      slidesPerView: 1,
      spaceBetween: 0,
      mousewheel: true,
      pagination: {
        clickable: true,
      },
    } as SwiperOptions,
  },

  /** Сітка слайдів */
  grid: {
    modules: ['navigation', 'pagination', 'grid'] as SwiperModuleName[],
    options: {
      slidesPerView: 2,
      spaceBetween: 20,
      grid: {
        rows: 2,
        fill: 'row' as const,
      },
      pagination: {
        clickable: true,
      },
      breakpoints: {
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      },
    } as SwiperOptions,
  },
} as const;

/**
 * Reusable Swiper Slider Component
 *
 * @example
 * // Базове використання
 * const slider = new SwiperSlider({
 *   container: '.my-slider',
 *   modules: ['navigation', 'pagination'],
 *   options: {
 *     slidesPerView: 3,
 *     spaceBetween: 20,
 *   }
 * });
 *
 * @example
 * // З пресетом
 * const reviewsSlider = SwiperSlider.fromPreset('.reviews-slider', 'reviews', {
 *   autoplay: { delay: 3000 }
 * });
 */
export class SwiperSlider {
  private swiper: Swiper | null = null;
  private config: SwiperSliderConfig;
  private containerElement: HTMLElement | null = null;

  constructor(config: SwiperSliderConfig) {
    this.config = config;
    this.init();
  }

  /**
   * Ініціалізація слайдера
   */
  private init(): void {
    // Отримуємо контейнер
    this.containerElement = this.getContainer();

    if (!this.containerElement) {
      console.warn(`[SwiperSlider] Container not found: ${this.config.container}`);
      return;
    }

    // Validate Swiper structure - must have swiper-wrapper and at least one swiper-slide
    const hasWrapper = !!this.containerElement.querySelector('.swiper-wrapper');
    const slideCount = this.containerElement.querySelectorAll('.swiper-slide').length;
    
    if (!hasWrapper || slideCount === 0) {
      console.warn(`[SwiperSlider] Invalid Swiper structure for ${this.config.container}. Missing .swiper-wrapper or .swiper-slide elements.`);
      return;
    }

    // Збираємо модулі
    const modules = this.getModules();

    // Формуємо фінальні опції
    const options: SwiperOptions = {
      ...this.config.options,
      modules,
    };

    // Створюємо Swiper
    this.swiper = new Swiper(this.containerElement, options);

    // Викликаємо колбеки
    if (this.config.onInit && this.swiper) {
      this.config.onInit(this.swiper);
    }

    if (this.config.onSlideChange && this.swiper) {
      this.swiper.on('slideChange', () => {
        this.config.onSlideChange?.(this.swiper!);
      });
    }
  }

  /**
   * Отримати контейнер
   */
  private getContainer(): HTMLElement | null {
    if (typeof this.config.container === 'string') {
      return document.querySelector(this.config.container);
    }
    return this.config.container;
  }

  /**
   * Отримати модулі за назвами
   */
  private getModules(): typeof Swiper.prototype['modules'] {
    if (!this.config.modules || this.config.modules.length === 0) {
      return [];
    }

    return this.config.modules
      .map((name) => modulesMap[name])
      .filter(Boolean);
  }

  /**
   * Отримати інстанс Swiper
   */
  getInstance(): Swiper | null {
    return this.swiper;
  }

  /**
   * Знищити слайдер
   */
  destroy(): void {
    if (this.swiper) {
      this.swiper.destroy(true, true);
      this.swiper = null;
    }
  }

  /**
   * Перейти до слайду
   */
  slideTo(index: number, speed?: number): void {
    this.swiper?.slideTo(index, speed);
  }

  /**
   * Наступний слайд
   */
  slideNext(speed?: number): void {
    this.swiper?.slideNext(speed);
  }

  /**
   * Попередній слайд
   */
  slidePrev(speed?: number): void {
    this.swiper?.slidePrev(speed);
  }

  /**
   * Оновити слайдер
   */
  update(): void {
    this.swiper?.update();
  }

  /**
   * Увімкнути autoplay
   */
  startAutoplay(): void {
    this.swiper?.autoplay?.start();
  }

  /**
   * Вимкнути autoplay
   */
  stopAutoplay(): void {
    this.swiper?.autoplay?.stop();
  }

  /**
   * Створити слайдер з пресету
   */
  static fromPreset(
    container: string | HTMLElement,
    presetName: keyof typeof SwiperPresets,
    overrideOptions?: SwiperOptions,
    callbacks?: {
      onInit?: (swiper: Swiper) => void;
      onSlideChange?: (swiper: Swiper) => void;
    }
  ): SwiperSlider {
    const preset = SwiperPresets[presetName];

    return new SwiperSlider({
      container,
      modules: [...preset.modules],
      options: {
        ...preset.options,
        ...overrideOptions,
      },
      ...callbacks,
    });
  }

  /**
   * Ініціалізувати декілька слайдерів за селектором
   */
  static initAll(
    selector: string,
    config: Omit<SwiperSliderConfig, 'container'>
  ): SwiperSlider[] {
    const containers = document.querySelectorAll<HTMLElement>(selector);
    const sliders: SwiperSlider[] = [];

    containers.forEach((container) => {
      sliders.push(
        new SwiperSlider({
          ...config,
          container,
        })
      );
    });

    return sliders;
  }

  /**
   * Ініціалізувати слайдер з data-атрибутів
   * @example
   * <div class="swiper" data-swiper-preset="reviews" data-swiper-autoplay-delay="3000">
   */
  static initFromDataAttributes(container: string | HTMLElement): SwiperSlider | null {
    const element =
      typeof container === 'string'
        ? document.querySelector<HTMLElement>(container)
        : container;

    if (!element) return null;

    const dataset = element.dataset;
    const presetName = dataset.swiperPreset as keyof typeof SwiperPresets | undefined;

    // Базова конфігурація
    const baseConfig: SwiperSliderConfig = {
      container: element,
      modules: [],
      options: {},
    };

    // Якщо є пресет
    if (presetName && SwiperPresets[presetName]) {
      const preset = SwiperPresets[presetName];
      baseConfig.modules = [...preset.modules];
      baseConfig.options = { ...preset.options };
    }

    // Парсимо додаткові data-атрибути
    if (dataset.swiperSlidesPerView) {
      baseConfig.options!.slidesPerView =
        dataset.swiperSlidesPerView === 'auto'
          ? 'auto'
          : Number(dataset.swiperSlidesPerView);
    }

    if (dataset.swiperSpaceBetween) {
      baseConfig.options!.spaceBetween = Number(dataset.swiperSpaceBetween);
    }

    if (dataset.swiperLoop !== undefined) {
      baseConfig.options!.loop = dataset.swiperLoop !== 'false';
    }

    if (dataset.swiperAutoplayDelay) {
      if (!baseConfig.modules?.includes('autoplay')) {
        baseConfig.modules?.push('autoplay');
      }
      baseConfig.options!.autoplay = {
        delay: Number(dataset.swiperAutoplayDelay),
        disableOnInteraction: false,
      };
    }

    if (dataset.swiperDirection) {
      baseConfig.options!.direction = dataset.swiperDirection as 'horizontal' | 'vertical';
    }

    if (dataset.swiperEffect) {
      baseConfig.options!.effect = dataset.swiperEffect as SwiperOptions['effect'];
    }

    return new SwiperSlider(baseConfig);
  }
}

export default SwiperSlider;

