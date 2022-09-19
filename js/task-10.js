function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

let elements = [];

const inputAmount = () => {
  console.log(`Количество элементов: ${input.value}`);
}

const createBoxes = () => {
  if(+input.value === 0 || +input.value > 100) {
    window.alert(`Введите число элементов (от 1 до 100)`);
  }
  boxes.innerHTML = '';
  elements = [];
  console.log(`Создаём ${input.value} элементов`);

  let width = 30;
  let height = 30;

  for(let i = 0; i < +input.value; i += 1) {
    const element = document.createElement('div');
    element.style.width = `${width}px`;
    element.style.height = `${height}px`;
    element.style.backgroundColor = getRandomHexColor();
    elements.push(element);
    width += 10;
    height += 10;
  }
  
  boxes.append(...elements);
}

const destroyBoxes = () => {
  console.log(`Удаляем все элементы`);
  elements = [];
  boxes.innerHTML = '';
}

input.addEventListener("input", inputAmount);
create.addEventListener("click", createBoxes);
destroy.addEventListener("click", destroyBoxes);