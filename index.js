
/* Ввід кнопок в input */
const input = document.querySelector('#input__number');
const btn = document.querySelectorAll('.numbers__btn');


btn.forEach(number => {
    number.addEventListener('click', () => {
        input.value += number.textContent;
    })
});

/* Очистити input */
const remove = document.querySelector('.result__remove_all');
remove.addEventListener('click', () => {
    input.value = [];
});

/* Удалити останню цифру */
const removeLast = document.querySelector('.result__remove_last');
removeLast.addEventListener('click', () => {
   let inputValue = input.value;
    let newValue = inputValue.substring(0, inputValue.length - 1);
    input.value = newValue;
});

/* Перевірка паролю */
const checkPass = document.querySelector('.result__submit');
checkPass.addEventListener('click', () => {
    const password = 7777;
    let inputValue = input.value;
    if(inputValue == password) {
        alert('Welcome!');
        input.value = [];
    } else if (inputValue == []) {
        alert('Enter Password!')
    } else {
        alert('Wrong Password!')
    }
});