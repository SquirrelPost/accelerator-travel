import Swiper from 'swiper/bundle';
import { Pagination } from 'swiper/modules';
import 'swiper/css';

let activePaginationButton;

const removeFocusFromPaginationButton = () => {
  activePaginationButton = document.querySelector('.swiper-pagination-bullet-active');
  activePaginationButton.setAttribute('tabindex', '-1');
  activePaginationButton.blur();
};

const createHeroSwiper = () => {
  const heroSwiper = new Swiper('.hero', {
    loop: true,
    modules: [Pagination],
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletElement: 'button type="button"',
    },
  });
  heroSwiper.on('slideChange', () => {
    removeFocusFromPaginationButton();
  });
  heroSwiper.init();
};

export { createHeroSwiper };
