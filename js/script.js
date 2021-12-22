import initSlider from './modules/slide.js';
import initSliderCategory from './modules/slide-category.js';
import initSliderBrands from './modules/slide-brands.js';
import initTimer from './modules/timer.js';

initTimer();
initSlider('.container-slider-week', '.week');
initSlider('.container-slider-last', '.last');
initSlider('.container-slider-sale', '.sale');

initSliderCategory('.container-slider-category', '.category');
initSliderBrands('.container-slider-brands', '.brands');
