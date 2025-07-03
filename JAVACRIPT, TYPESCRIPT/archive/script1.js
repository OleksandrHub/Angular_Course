'use strict';
// Використання строгого режиму JavaScript'
console.log("Hello, World!", "2"); // Виведення повідомлення в консоль
console.log(555); // Виведення числа в консоль
/* Comments */

// Змінні
let message = 5; // Змінна a
message = 10; // Зміна значення змінної a
const constantValue = 20; // Константа, значення якої не змінюється
// console.log(message);
// console.log(constantValue);

var oldVariable = "This is an old variable"; // Застаріла змінна, використовуйте let або const

let 
    anotherVariable = "This is another variable", 
    yetAnotherVariable = "This is yet another variable"; 
// Оголошення кількох змінних в одному рядку

// Типи даних
let number = 42; // Число
let string = "Hello, World!"; // Рядок
let booleanValue = true; // Логічне значення
let nullValue = null; // Значення null
let undefinedValue; // Значення undefined
let objectValue = { key: "value" }; // Об'єкт
let arrayValue = [1, 2, 3]; // Масив
let symbolValue = Symbol("unique"); // Символ
let bigIntValue = 12345678901234567890n; // Велике ціле число

let backtickString = `This is a string with backticks
that can span multiple lines and include variables like ${number}.`; // Шаблонний рядок
// console.log(backtickString); // Виведення шаблонного рядка в консоль

// Використання операторів
let sum = 5 + 10; // Додавання
let difference = 10 - 5; // Віднімання
let product = 5 * 10; // Множення
let quotient = 10 / 2; // Ділення
let remainder = 10 % 3; // Залишок від ділення
let exponentiation = 2 ** 3; // Піднесення до степеня
// console.log(`Sum: ${sum}, Difference: ${difference}, Product: ${product}, Quotient: ${quotient}, Remainder: ${remainder}, Exponentiation: ${exponentiation}`);

const readNumber = 1_000_000; // Число з підкресленнями для кращої читабельності
// console.log(`Read Number: ${readNumber}`); // Виведення числа з підкресленнями в консоль

// console.log(typeof message); // Виведення типу змінної message
// console.log(typeof constantValue); // Виведення типу константи constantValue

// Перетворення типів
let stringToNumber = Number("123"); // Перетворення рядка в число
let numberToString = String(123); // Перетворення числа в рядок
let booleanToString = String(true); // Перетворення логічного значення в рядок
let nullToString = String(null); // Перетворення null в рядок
let undefinedToString = String(undefined); // Перетворення undefined в рядок
let objectToString = String({ key: "value" }); // Перетворення об'єкта в рядок
let arrayToString = String([1, 2, 3]); // Перетворення масиву в рядок
let symbolToString = String(Symbol("unique")); // Перетворення символу в рядок
let bigIntToString = String(12345678901234567890n); // Перетворення великого цілого числа в рядок

// Унарний оператор
let unaryPlus = +stringToNumber; // Унарний плюс для перетворення
let unaryMinus = -number; // Унарний мінус для зміни знаку числа
// console.log(`Unary Plus: ${unaryPlus}, Unary Minus: ${unaryMinus}`); // Виведення результатів у консоль

number += 5; // Додавання з присвоєнням
console.log(`Updated Number: ${number}`); // Виведення оновленого числа в консоль

// Дикременти
let increment = 5; // Змінна для демонстрації інкременту
increment++; // Інкремент (збільшення на 1)
let decrement = 10; // Змінна для демонстрації декременту
decrement--; // Декремент (зменшення на 1)
console.log(`Incremented: ${increment}, Decremented: ${decrement}`);

// Логічні оператори
let andOperator = true && false; // Логічне І
let orOperator = true || false; // Логічне АБО
let notOperator = !true; // Логічне НЕ
// console.log(`AND: ${andOperator}, OR: ${orOperator}, NOT: ${notOperator}`); // Виведення результатів логічних операторів в консоль

// Порівняльні оператори
let isEqual = (5 == "5"); // Порівняння на рівність (без типу)
let isStrictEqual = (5 === "5"); // Порівняння на строгість (з типом)
let isNotEqual = (5 != "5"); // Порівняння на нерівність (без типу)
let isStrictNotEqual = (5 !== "5"); // Порівняння на строгу нерівність (з типом)
let isGreater = (10 > 5); // Порівняння на більше
let isLess = (5 < 10); // Порівняння на менше
let isGreaterOrEqual = (10 >= 10); // Порівняння на більше або рівне
let isLessOrEqual = (5 <= 10); // Порівняння на менше або рівне
// console.log(`Equal: ${isEqual}, Strict Equal: ${isStrictEqual}, Not Equal: ${isNotEqual}, Strict Not Equal: ${isStrictNotEqual}, Greater: ${isGreater}, Less: ${isLess}, Greater or Equal: ${isGreaterOrEqual}, Less or Equal: ${isLessOrEqual}`); // Виведення результатів порівняльних операторів в консоль


