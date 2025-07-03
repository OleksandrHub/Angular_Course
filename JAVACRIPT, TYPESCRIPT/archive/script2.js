'use strict';

const message = "Hello, World"; // Використання const для незмінної змінної

if (typeof message === 'string') {
    console.log(message); // Виведення повідомлення в консоль
} else if (typeof message === 'number') {
    console.log("This is a number:", message); // Виведення числа в консоль
} else {
    console.log("Unknown type:", typeof message); // Виведення типу змінної
}

const constantValue = "Hello, World!" === message 
    ? true 
    : false; // Використання тернарного оператора для присвоєння значення
console.log("Constant Value:", constantValue); // Виведення константи в консоль

constantValue && console.log("This is a constant value that will not change."); // Використання логічного оператора для умовного виведення

console.log(!!constantValue); // Виведення повідомлення з числом в консоль

console.log(message ?? "Default Message"); // Використання оператору нульового злиття для виведення значення або дефолтного повідомлення
