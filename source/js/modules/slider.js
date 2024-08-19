import Swiper from 'swiper';

import { Pagination } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  loop: true,
  modules: [Pagination],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    // type : 'custom',
    // renderBullet: function (index, className) {
    //   return '<span class="' + className + '">' + (index + 1) + "</span>";
    // },
  },
});

export { swiper };
