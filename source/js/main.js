import { initNav } from './modules/nav.js';
import './modules/hero-slider.js';
import { createCardSwipers } from './modules/card-slider.js';
import {calcStarsWidth} from './modules/star-rating.js';

initNav();
calcStarsWidth();
createCardSwipers();
