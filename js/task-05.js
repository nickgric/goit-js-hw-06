const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
const output = function() {
    if(nameInput.value !== '') {
    nameOutput.textContent = nameInput.value;} else {
        nameOutput.textContent = 'Anonymous'
    };
};
nameInput.addEventListener("input", output);