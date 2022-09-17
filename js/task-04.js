let counterValue = 0;
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const counter = document.querySelector('#value');

const valueDecrement = function() {
    counterValue -= 1;
    counter.textContent = counterValue;
};

const valueIncrement = () => {
    counterValue += 1;
    counter.textContent = counterValue;
};

buttonDecrement.addEventListener("click", valueDecrement);
buttonIncrement.addEventListener("click", valueIncrement);

