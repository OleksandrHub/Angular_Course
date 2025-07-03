// методи у примітивних типів даних

const price = 99
const roundedPrice = price.toFixed(0) // Заокруглення числа
// console.log(roundedPrice)

// console.log((5.122).toFixed(2))
// console.log((5.122).toPrecision(2)) // заокруглення але рахується з початку числа

const toString = price.toString()
// console.log(toString)

const toNumberSys = price.toString(2) // двійкова система числення
console.log(toNumberSys) 

console.log(Math)
console.log(Math.PI)
console.log(Math.E)
console.log("Random number:", Math.random())
console.log("ABS :", Math.abs(-10))
console.log("Pow: ", Math.pow(2, 3))
console.log("Sqrt: ", Math.sqrt(1))
console.log("CSQRT: ", Math.cbrt(8))
console.log("MIN: ", Math.min(1, 2, 3, 4, 5))
console.log("MAX: ", Math.max(1, 2, 3, 4, 5))

const mass = [2, 4, 6, 8, 10]
console.log(Math.min(...mass))
console.log(Math.max(...mass))

console.log("Round: ", Math.round(5.4)) // Заокруглення до цілого
console.log("Ceil: ", Math.ceil(5.4)) // До більшого
console.log("Floor: ", Math.floor(5.4)) // До меншого
console.log("Trunc: ", Math.trunc(5.4)) // Видалення дробової частини

const numberAsString = '100'
console.log(Number(numberAsString))
console.log(parseInt(numberAsString))
console.log(parseFloat(numberAsString))
console.log(parseInt(numberAsString,2)) // двійкова система

// Методи рядків

const name = 'Ivan  '
console.log(name.trim()) // видалення пробілів
console.log(name.trimStart()) // видалення лівих пробілів
console.log(name.trimEnd()) // видалення правих пробілів
console.log(name.length)
console.log(name.toUpperCase()) // вищий регістр
console.log(name.toLowerCase()) // нижній регістр
console.log(name[0])
console.log(name[name.length - 1])
console.log(name.at(-1))

console.log(name.indexOf('an')) // Індекс першого елементу, другий аргумент це індекс пошуку
console.log(name.lastIndexOf(' ')) // Індекс останнього елементу, другий аргумент це індекс пошуку
console.log(name.includes('a')) // Пошук підстрок вертає true or false, другий аргумент це індекс пошуку

console.log(name.startsWith("Iv")) // Чи починається, другий аргумент це індекс пошуку
console.log(name.endsWith("an")) // Чи закінчується, другий аргумент це індекс пошуку
console.log(name.slice(0, 3)) // Обрізка рядка
console.log(name.substring(0, 3)) // Обрізка рядка
console.log(name.repeat(3)) // Повторення рядка
console.log(name.replace('an', 'ov')) // Заміна підстроки
console.log(name.replaceAll('a', 'o')) // Заміна всіх підстрок
console.log(name.split('a')) // Розділення рядка на масив



