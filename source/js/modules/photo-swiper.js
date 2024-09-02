import Swiper from 'swiper';
import 'swiper/css';

const createPhotoSwiper = () => {
  const photoSwiper = new Swiper('.photo-swiper__slider', {
    enabled: true,
    loop: true,
    initialSlide: 0,
    slidesPerView: 2,
    spaceBetween: 6,
    navigation: {
      nextEl: '.photo-swiper__button--next',
      prevEl: '.photo-swiper__button--prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      1440: {
        enabled: false,
        slidesPerView: 5,
        spaceBetween: 4,
      },
    },
  });
  photoSwiper.init();
};

export { createPhotoSwiper };
