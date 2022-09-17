function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector('.change-color');
const color = document.querySelector('.color');
const body = document.querySelector('body');

const changeColor = (event) => {
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = body.style.backgroundColor;
}

button.addEventListener("click", changeColor);