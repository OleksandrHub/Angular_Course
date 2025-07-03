// DOM - Document Object Model

const imageDisplay = document.querySelector('.image');
const btnHapinessDisabled = document.getElementById('btn-hapiness');
const btnSadnessDisabled = document.getElementById('btn-sadness');

function showImage(selector) {
    const isHapiness = selector === 'btn-hapiness';
    imageDisplay.style.display = isHapiness ? 'inline' : 'none';
    btnHapinessDisabled.disabled = isHapiness;
    btnSadnessDisabled.disabled = !isHapiness;
}

document.getElementById('btn-hapiness').addEventListener('click', () => showImage('btn-hapiness'));
document.getElementById('btn-sadness').addEventListener('click', () => showImage('btn-sadness'));
// Callback function
// document.getElementsByClassName('image-container')
// document.getElementsByTagName('img')
// document.querySelector('.image-container')
// document.querySelectorAll('.image-container')

// Замикання (closure) - це особливий тип функції в програмуванні, яка має доступ до своєї зовнішньої області видимості (scope) навіть після того, як зовнішня функція завершила виконання.
// const name = 'Ivan';

// function sayName() {
//     const last = 'Petrov';
    
//     return function () {
//         console.log(name + ' ' + last);
//     }
// }

// sayName()();

// Hoisting - це процес, який дозволяє викликати змінну, функцію або об'єкт перед його дефініцією у коді.

// Чому не працює
sayGreeting();

function sayGreeting() {
    console.log('Hello');
}

console.log(age);

var age = 20;

// Temparal Dead Zone

// let age = 20;

// Hoisting працює лише впевній області видимості

const numbers = [1, 3, 6, 8, 9, 10, 21, 1, 1, 3, 9, 5, 6, 8]
const numberForFind = 4;

function countNumber(numbers, numberForFind) {
    let count = 0
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === numberForFind) {
            count++
        }
    }
    if ( count === 0 ) {
        return 'Number not found'
    }
    return count
}

console.log(countNumber(numbers, numberForFind))