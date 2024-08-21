import Swiper from 'swiper';

import { Navigation } from 'swiper/modules';
import 'swiper/css';

const cardSwiper = new Swiper('.card-swiper__slider', {
  loop: false,
  modules: [ Navigation],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

export { cardSwiper };
