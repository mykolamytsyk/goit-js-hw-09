const bodyChangeColor = document.querySelector('body');
const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');

let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function toggleButtonState(startButton, stopButton, disableStart) {
  startButton.disabled = disableStart;
  stopButton.disabled = !disableStart;
}

buttonStop.setAttribute('disabled', '');

buttonStart.addEventListener('click', () => {
  toggleButtonState(buttonStart, buttonStop, true);

  intervalId = setInterval(() => {
    bodyChangeColor.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

buttonStop.addEventListener('click', () => {
  toggleButtonState(buttonStart, buttonStop, false);

  clearInterval(intervalId);
});
