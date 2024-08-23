import Swiper from 'swiper';

import { Navigation } from 'swiper/modules';
import 'swiper/css';

const cardSwiper = new Swiper('.card-swiper__slider', {
  loop: false,
  slidesPerView: 1,
  modules: [ Navigation],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      watchSlidesProgress: true,
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

export { cardSwiper };
