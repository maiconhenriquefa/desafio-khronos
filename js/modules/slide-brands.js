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
  //Handle next slider: start
  function changeNext() {
    // Set i equal number image
    if (i < 12 - 7) {
      // Add i
      i++;
    } else {
      // Reset i
      i = 0;
    }
    let items = 12;
    let widthCont = sliderContainer.clientWidth;
    if (widthCont < 1181) {
      items = 6;
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
      i = 12 - 7;
    }
    let items = 12;
    let widthCont = sliderContainer.clientWidth;
    if (widthCont < 1181) {
      items = 6;
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
