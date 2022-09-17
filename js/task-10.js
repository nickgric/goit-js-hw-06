function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

let amount = 0;
let elements = [];

const inputAmount = () => {
  console.log(`Количество элементов: ${amount}`);
}

const createBoxes = () => {
  if(input.value == '' || input.value > 25) {
    window.alert(`Введите число элементов (от 1 до 25)`);
  }

  amount = 0;
  elements = [];
  amount = input.value;

  console.log(`Создаём ${amount} элементов`);

  for(let i = 0; i < amount; i += 1) {
    const element = `<div>11</div>`;
    elements.push(element);
    boxes.innerHTML = '';
    boxes.insertAdjacentHTML("afterbegin", elements.join(''));
  }
}

const destroyBoxes = () => {
  console.log(`Удаляем все элементы`);
  amount = 0
  elements = [];
  boxes.innerHTML = '';
}

input.addEventListener("input", inputAmount);
create.addEventListener("click", createBoxes);
destroy.addEventListener("click", destroyBoxes);
