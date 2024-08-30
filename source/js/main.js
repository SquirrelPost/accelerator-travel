import { initNav } from './modules/nav.js';
import {createHeroSwiper} from './modules/hero-slider.js';
import { createCardSwipers } from './modules/card-slider.js';
import {createAdvSwiper} from './modules/adv-swiper.js';
import {createPhotoSwiper} from './modules/photo-swiper.js';
import {calcStarsWidth} from './modules/star-rating.js';
import {initForm} from './modules/input-validate.js';

initNav();
calcStarsWidth();
createHeroSwiper();
createCardSwipers();
createAdvSwiper();
createPhotoSwiper();
initForm();
