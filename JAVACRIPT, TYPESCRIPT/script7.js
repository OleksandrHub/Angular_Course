// OOP
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person = new Person("John", 30);
person.sayHello();

// 4 Принципи ООП
// 1. Наслідування
// 2. Поліморфізм
// 3. Абстракція
// 4. Інкапсуляція

class Student extends Person { // Наслідування
    #test = "Test";
    constructor(name, age, grade) {
        super(name, age); // Поліморфізм
        this.grade = grade;
    }
    study() {
        console.log(`${this.name} is studying in grade ${this.grade}.`);
    }
    test() {
        console.log(this.#test);
    }
}

const student = new Student("Jane", 20, 10);
student.sayHello();
student.study();
// student.#test; // Error
student.test();

// Абстракція - це метод або клас, який не може бути викликаний, але може бути наслідуваний.

// Фабричні функції - це функції, які повертають об'єкти. Та конструктори, які повертають об'єкти.

function createPerson(name, age) {
    return {
        name,
        age,
        sayHello() {
            console.log(`Hello, my name is ${name} and I am ${age} years old.`);
        }
    };
}

const person2 = createPerson("John", 30);
person2.sayHello();

function CreateSuperPerson(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        console.log(`Hello, my name is ${name} and I am ${age} years old.`);
    };
}

const person3 = new CreateSuperPerson("John", 30);
person3.sayHello();

// Prototype - це об'єкт, який може бути наслідуваний.

function newPerson(name, age) {
    this.name = name;
    this.age = age;
}

newPerson.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}

const person4 = new newPerson("John", 30);
person4.sayHello();

// this, call, apply, bind

function sayHello(name, age) {
    console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

const person5 = {
    name: "John",
    age: 30,
    sayHello: sayHello,
}

const person6 = {
    name: "Jane",
    age: 25,
}

person5.sayHello();
sayHello.call(person6, person6.name, person6.age);
sayHello.apply(person6, [person6.name, person6.age]);
sayHello.bind(person6)();// bind returns a new function



