export default function initSliderCategory(container, parent) {
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
    if (i < 20 - 11) {
      // Add i
      i++;
    } else {
      // Reset i
      i = 0;
    }
    let items = 20;
    let widthCont = sliderContainer.clientWidth;
    if (widthCont < 1060) {
      items = 8;
    } else if (widthCont < 1181) {
      items = 10;
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
      i = 20 - 11;
    }
    let items = 20;
    let widthCont = sliderContainer.clientWidth;
    if (widthCont < 1060) {
      items = 8;
    } else if (widthCont < 1181) {
      items = 10;
    }
    sliderContainer.style.transform = `translateX(${
      -i * (widthCont / items)
    }px)`;
  }
  //Handle prev slider: end
  // Interval time handle slider: start
  let time = 3000;
  setInterval(changeNext, time);
  // Interval time handle slider: end
}
