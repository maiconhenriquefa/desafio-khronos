export default function initSliderBrands(container, parent) {
  let sliderContainer = document.querySelector(container);

  const seletorPrev = `${parent} .prev`;
  const seletorNext = `${parent} .next`;
  const arrowPrev = document.querySelector(seletorPrev);
  const arrowNext = document.querySelector(seletorNext);

  arrowPrev.addEventListener('click', changePrev);
  arrowNext.addEventListener('click', changeNext);

  // Start point
  let i = 0;

  //Handle width an items: start
  let items = 12;
  let widthCont = sliderContainer.clientWidth;
  let widthWindow = window.innerWidth;

  if (widthWindow < 800) {
    items = 6;
  }
  //Handle width an items: end

  //Handle next slider: start
  function changeNext() {
    // Set i equal number image
    if (i < items + 1) {
      // Add i
      i++;
    } else {
      // Reset i
      i = 0;
    }
    sliderContainer.style.transform = `translateX(${
      -i * (widthCont / items)
    }px)`;
  }

  //Handle next slider: end
  //Handle prev slider: start
  function changePrev() {
    // Set i equal number image
    if (i > 0) {
      // Add i
      i--;
    } else {
      // Reset i
      i = items - 1;
    }
    sliderContainer.style.transform = `translateX(${
      -i * (widthCont / items)
    }px)`;
  }
  //Handle prev slider: end
  // Interval time handle slider: start
  let time = 2500;
  setInterval(changeNext, time);
  // Interval time handle slider: end
}
