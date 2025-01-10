import 'swiper/css';

import { Swiper } from 'swiper';
import { Autoplay, Mousewheel } from 'swiper/modules';

// Use built-in creative effect instead of custom carousel effect
export function swiperApprenants() {
  const swiperContainers = document.querySelectorAll('.swiper.is-apprenants');

  swiperContainers.forEach((container) => {
    // Cast container to HTMLElement to fix type error
    new Swiper(container as HTMLElement, {
      modules: [Autoplay, Mousewheel],
      direction: 'horizontal',
      loop: true,
      slidesPerView: 3,
      autoHeight: true,
      spaceBetween: 16,
      centeredSlides: true, // Ensure slides are left-aligned
      speed: 1000,
      autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      },
      mousewheel: {
        forceToAxis: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  });
}
