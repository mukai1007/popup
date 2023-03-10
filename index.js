let form = document.querySelector('.form')
let inputEmail = document.querySelector('.input-email')
let labelEmail = document.querySelector('.email-label')

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.onsubmit = function () {
    let emailVal = inputEmail.value
    if(!validateEmail(emailVal)) {
        inputEmail.classList.add('error');
        labelEmail.innerHTML = 'Введите корректный email!'
        return false;
    }
    else {
        labelEmail.innerHTML = 'Для получения бонуса введите email'
        inputEmail.classList.remove('error');
    }
}