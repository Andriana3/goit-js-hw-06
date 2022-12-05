const buttonChange = document.querySelector('.change-color');
const bgColor = document.querySelector('.color');
const body = document.querySelector('body');

buttonChange.addEventListener('click', onChangeColor);

function onChangeColor() {
  const newColor = getRandomHexColor();
  bgColor.textContent = newColor;
  body.style.backgroundColor = newColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

