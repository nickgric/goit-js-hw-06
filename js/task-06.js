const inputForm = document.querySelector('input');
const inputEvent = function () {
    if(inputForm.value.length == inputForm.dataset.length) {
        inputForm.classList.add('valid');
        inputForm.classList.remove('invalid');
    } else {
        inputForm.classList.add('invalid');
        inputForm.classList.remove('valid');
}
    console.log(inputForm.value.length);
};
inputForm.addEventListener('blur', inputEvent);