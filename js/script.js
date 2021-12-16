function startTimer(duration, displayHours, displayMinutes, displaySeconds) {
  let timer = duration,
    hours,
    minutes,
    seconds;
  setInterval(function () {
    hours = parseInt(timer / 3600, 10);
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    displayHours.textContent = hours;
    displayMinutes.textContent = minutes;
    displaySeconds.textContent = seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

window.onload = function () {
  let duration = 59 * 60;
  let displayHours = document.querySelector('#hours');
  let displayMinutes = document.querySelector('#minutes');
  let displaySeconds = document.querySelector('#seconds');

  startTimer(duration, displayHours, displayMinutes, displaySeconds);
};
