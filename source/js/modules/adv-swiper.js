import Swiper from 'swiper';
import 'swiper/css';

const createAdvSwiper = () => {
  const advSwiper = new Swiper('.adv-swiper__slider', {
    enabled: false,
    initialSlide: 2,
    breakpoints: {
      1440: {
        enabled: true,
        loop: true,
        slidesPerView: 'auto',
        slidesPerGroup: 2,
        centeredSlides: true,
        spaceBetween: 30,
        navigation: {
          nextEl: '.adv-swiper__button--next',
          prevEl: '.adv-swiper__button--prev',
        },
      },
    },
  });
  advSwiper.init();
};

export { createAdvSwiper };
