const form = document.querySelector('.login-form');
const submit = (event) => {
    event.preventDefault();
    if(form.elements.email.value === '' || form.elements.password.value === '') {
        window.alert(`Все поля должны быть заполнены!`)
    } else {
        const email = form.elements.email.value;
        const password = form.elements.password.value;
        console.log({
            email,
            password
        });
        form.reset();
    }
}
form.addEventListener('submit', submit);