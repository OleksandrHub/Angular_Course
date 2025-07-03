// Змінні
// alert(12345)
var oldValue = 1; // небажано використовувати
let newValue = 2;
const pi = 3.14;
// reserved words example 
alert(newValue);
// Data Types
// string, number, boolean, null, undefined, object, symbol, bigint
console.log(typeof "Hello"); // string
console.log(typeof 123); // number
console.log(typeof true); // boolean
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof alert); // function
console.log(typeof console); // object
console.log(typeof 1n); // bigint
console.log(typeof Symbol()); // Symbol

const user = {
    name: "John",
    age: 30,
    isAdmin: true,
};

const userIdSymbol = Symbol("id");
user[userIdSymbol] = 12345;
console.log(user);

// Comments /* */ or //

// Умовні оператори 
// if, else, else if
// &&, ||, !
// ??

if (user.age >= 18) {
    console.log("User is an adult");
} else {
    console.log("User is a child");
}

// Ternary operator
user.age >= 18 ? console.log("User is an adult") : console.log("User is a child");

// Switch
switch (user.age) {
    case 18:
        console.log("User is an adult");
        break;
    case 16:
        console.log("User is a teenager");
        break;
    default:
        console.log("User is a child");
        break;
}

// Arithmetic operators
console.log(1 + 2); // addition
console.log(1 - 2); // subtraction
console.log(1 * 2); // multiplication
console.log(1 / 2); // division
console.log(1 % 2); // modulus (remainder)
console.log(1 ** 2); // exponentiation

// Logical operators
console.log(true && true); // and
console.log(true || false); // or
console.log(!true); // not

// Relational operators
console.log(1 > 2); // greater than
console.log(1 < 2); // less than
console.log(1 >= 2); // greater than or equal to
console.log(1 <= 2); // less than or equal to
console.log(1 == 2); // equal to
console.log(1 != 2); // not equal to 
console.log(1 === 2); // strictly equal to
console.log(1 !== 2); // strictly not equal to

// Assignment operators
let x = 1;
x += 2; // x = x + 2
x -= 2; // x = x - 2
x *= 2; // x = x * 2
x /= 2; // x = x / 2
x %= 2; // x = x % 2
x **= 2; // x = x ** 2

// Increment and decrement operators
let y = 1;
y++; // y = y + 1
y--; // y = y - 1

// String concatenation
let name = "John";
let age = 30;
console.log("My name is " + name + " and I am " + age + " years old.");

// String interpolation
console.log(`My name is ${name} and I am ${age} years old.`);

// Bitwise operators
// 1 - 0001
// 2 - 0010
console.log(1 & 2); // and  - 0000
console.log(1 | 2); // or   - 0011
console.log(1 ^ 2); // xor  - 0011
console.log(~1);     // not  - 1110
console.log(1 << 2); // shift left  - 1000
console.log(1 >> 2); // shift right - 0000

// Unary operators
console.log(+1); // unary plus
console.log(-1); // unary minus
console.log(!true); // unary not
delete user.age;
console.log(user);

console.log('age' in user); // true
console.log('names' in user); // false

// Coersion operators
console.log(Number("123")); // 123
console.log(String(123)); // "123"
console.log(Boolean(0)); // false
console.log(Boolean(123)); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean("")); // false
console.log(Boolean("0")); // true
console.log(Boolean(" ")); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true

// Numbers Methods
let num = 123.456;
console.log(num.toFixed(2)); // "123.46"
console.log(num.toExponential(2)); // "1.23e+2" - заокруглення числа але рахується з початку числа 
console.log(num.toPrecision(2)); // "1.2e+2" - заокруглення але рахується з початку числа  
console.log(num.toLocaleString()); // "123.456"
console.log(num.toString()); // "123.456"
console.log(num.valueOf()); // 123.456

// Math Methods
console.log(Math.abs(-10)); // 10
console.log(Math.ceil(1.2)); // 2
console.log(Math.floor(1.2)); // 1
console.log(Math.round(1.2)); // 1
console.log(Math.round(1.5)); // 2
console.log(Math.max(1, 2, 3, 4, 5)); // 5
console.log(Math.min(1, 2, 3, 4, 5)); // 1
console.log(Math.random()); // random number between 0 and 1
console.log(Math.random() * 100); // random number between 0 and 100
console.log(Math.pow(2, 3)); // 2^3 = 8
console.log(Math.sqrt(4)); // 2
console.log(Math.cbrt(8)); // 2
console.log(Math.sin(Math.PI / 2)); // 1
console.log(Math.cos(Math.PI / 2)); // 0



