// const globalVariable = "This is a global variable";


// function logMessage(message) {
//     console.log(message);
//     // alert(globalVariable);
//     console.log("Global variable:", globalVariable);
//     const localVariable = "This is a local variable";
//     console.log("Local variable:", localVariable);
//     for (let i = 0; i < 3; i++) {
//         const localVariable = `Loop variable ${i}`;
//         console.log("Loop iteration:", i, "Local variable:", localVariable);
//     }
// }

// logMessage("Hello, World!");
'use strict';

// function logMessage(message = "Default Message", count){
//     for (let i = 0; i < count; i++) {
//         console.log(message);
//     }
//     return message + " logged " + count + " times.";
// }

// logMessage("Hello, World!", 5);
// console.log(logMessage(undefined, 3));

// Function Declaration
console.log(greet("Alice"));

function greet(name) {
    if (!name) return "Hello, World!";
    console.log(arguments);
    return `Hello, ${name}!`;
}

// Function Expression
const greetExpression = function(name) {
    if (!name) return "Hello, World!";
    return `Hello, ${name}!`;
};

console.log(greetExpression("Bob"));
// Вона є константою, тому не може бути перевизначена
// немає шаблонів, тому не може бути викликана до оголошення

// Arrow Function
const greetArrow = (name) => {
    if (!name) return "Hello, World!";
    return `Hello, ${name}!`;
};

console.log(greetArrow("Charlie"));

// Вона є константою, тому не може бути перевизначена
// немає шаблонів, тому не може бути викликана до оголошення
// немає arguments, тому не може бути використана для доступу до аргументів

/*
Префікси для функцій:
* get - отримувати значення
* set - встановлювати
* create - 
* update
* delete
* show
* hide 
* search
* calc
* check.      
*/




