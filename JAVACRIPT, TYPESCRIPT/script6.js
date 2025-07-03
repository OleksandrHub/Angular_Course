// Проміси - це об'єкти, які представляють результат асинхронних операцій. 
// Вони мають два стани: pending (в процесі) і fulfilled (виконаний) або rejected (відхилений).
const promise = new Promise((resolve, reject) => {
    const isUserLoggedIn = true;
    if (isUserLoggedIn) {
        resolve("User is logged in");
    } else {
        reject("User is not logged in");
    }
});

promise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log("Promise is finished");
    });

// async await

async function getUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const userData = await response.json();
        return userData;
    } catch (error) {
        console.error('Помилка:', error);
        return null;
    }
}

getUserData().then(data => {
    if (data) {
        console.log("Отримана відповідь:", data);
    }
});

// Відео "JavaScript Basics for Beginners #22 - Async Await" пояснює `async/await` як спрощений синтаксис для роботи з промісами в JavaScript. 
// Воно демонструє використання `async/await` з `fetch` для отримання даних, показує, як це робить асинхронний код більш читабельним, і наголошує,
//  що `await` може використовуватися лише в `async` функціях, які завжди повертають проміс. Також розглядається обробка помилок за допомогою `try...catch`.
//  Відео включає практичне завдання з фільтрації користувачів, демонструючи його рішення та оптимізацію для порожнього поля введення. 
// Головний висновок: `async/await` — це "синтаксичний цукор", що покращує читабельність без зміни основних асинхронних механізмів.

