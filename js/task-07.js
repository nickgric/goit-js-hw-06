const fontSizeController = document.querySelector('#font-size-control');
const textLabel = document.querySelector('#text');
console.log(textLabel.style.fontSize);
const fontSizeChanger = () => {
    textLabel.style.fontSize = `${fontSizeController.value}px`;
}
fontSizeController.addEventListener('input', fontSizeChanger);