"use strict";
// Взаємодія з корустувачем та switch case
alert("Вітаємо на нашій сторінці!");
console.log("Вітаємо на нашій сторінці!");
alert("Виберіть опцію:\n1. Показати повідомлення\n2. Вивести число\n3. Вивести тип змінної");
const userChoice = prompt("Введіть номер опції (1-3):");

switch (userChoice) {
    case '1':
        alert("Повідомлення: Hello, World");
        console.log("Повідомлення: Hello, World");
        break;
    case '2':
        alert("Це число: 42");
        console.log("Це число: 42");
        break;
    case '3':
        alert("Тип змінної: string");
        console.log("Тип змінної: string");
        break;
    default:
        alert("Невірний вибір. Будь ласка, спробуйте ще раз.");
        console.log("Невірний вибір. Будь ласка, спробуйте ще раз.", userChoice);
        break;
}

const ready = confirm("Чи готові ви продовжити?");
if (ready) {
    alert("Добре, продовжуємо!");
    console.log("Користувач готовий продовжити.");
} else {
    alert("Добре, до зустрічі!");
    console.log("Користувач не готовий продовжити.");
}

// Цикли 
while (true) {
    const continueLoop = confirm("Бажаєте продовжити цикл?");
    if (!continueLoop) {
        console.log("Цикл завершено.");
        break;
    }
    console.log("Цикл продовжується...");
}

do {
    const continueLoop = confirm("Бажаєте продовжити цикл?");
    if (!continueLoop) {
        console.log("Цикл завершено.");
        break;
    }
    console.log("Цикл продовжується...");
}while (true);

for (let i = 0; i < 5; i++) {
    console.log("Цикл for, ітерація:", i);
    if (i === 3) {
        console.log("Досягнуто ітерації 3, вихід з циклу.");
        break; // Вихід з циклу при досягненні ітерації 3
    }
}