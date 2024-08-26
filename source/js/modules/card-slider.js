import Swiper from 'swiper';

import { Navigation } from 'swiper/modules';
import 'swiper/css';

const cardSwipers = document.querySelectorAll('.card-swiper__slider');

let variableId;

const SliderVariables = {
  'tours-swiper': {
    slidesPerViewTablet: 2,
    slidesPerViewDesktop: 3,
    spaceBetweenTablet: 18,
    spaceBetweenDesktop: 30,
    initialSlide: 0,
    navButtonNext: '.tours__button--next',
    navButtonPrev: '.tours__button--prev',
  },
  'training-swiper': {
    slidesPerViewTablet: 3,
    slidesPerViewDesktop: 4,
    spaceBetweenTablet: 20,
    spaceBetweenDesktop: 20,
    initialSlide: 2,
    navButtonNext: '.training__button--next',
    navButtonPrev: '.training__button--prev',
  },
};

const createCardSwipers = () => {
  cardSwipers.forEach((value) => {
    variableId = String(value.id);
    const cardSwiper = new Swiper(value, {
      loop: false,
      slidesPerView: 1,
      initialSlide: 0,
      modules: [Navigation],
      navigation: {
        nextEl: SliderVariables[variableId]['navButtonNext'],
        prevEl: SliderVariables[variableId]['navButtonPrev'],
      },
      breakpoints: {
        320: {
          initialSlide: SliderVariables[variableId]['initialSlide'],
        },
        768: {
          watchSlidesProgress: true,
          slidesPerView: SliderVariables[variableId]['slidesPerViewTablet'],
          spaceBetween: SliderVariables[variableId]['spaceBetweenTablet'],
        },
        1440: {
          slidesPerView: SliderVariables[variableId]['slidesPerViewDesktop'],
          spaceBetween: SliderVariables[variableId]['spaceBetweenDesktop'],
        },
      },
    });
    cardSwiper.init();
  });
};

export { createCardSwipers };
