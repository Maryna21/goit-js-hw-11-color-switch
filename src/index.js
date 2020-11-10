import './styles.css';
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
let timeoutId = null;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const buttonStartRef = document.querySelector('button[data-action="start"]');
const buttonStopRef = document.querySelector('button[data-action="stop"]');
buttonStartRef.addEventListener('click', onStartChangeBgColor);
buttonStopRef.addEventListener('click', onStopChangeBgColor);

const setBodyBgColor = function() {
  document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
}

function onStartChangeBgColor() { 
  if (buttonStartRef.disabled = true) {
    buttonStopRef.disabled = false;
  };

  timeoutId = setInterval(() => { setBodyBgColor(), 1000});
}

function onStopChangeBgColor() {
  if (buttonStopRef.disabled = true) {
     buttonStartRef.disabled = false;
  };

  clearInterval(timeoutId);
}