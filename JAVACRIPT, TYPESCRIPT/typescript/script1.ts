// 3) БАЗОВІ ТИПИ

let entity: number = 5;
// : number - означає, що entity це число
// : string - означає, що entity це рядок
// : boolean - означає, що entity це логічне значення
// : object - означає, що entity це об'єкт
// : any - означає, що entity може бути будь-якого типу
// : undefined - означає, що entity не існує
// : null - означає, що entity є нульовим значенням
// : any - означає, що entity може бути будь-якого типу
// : unknown - означає, що entity не знає свого типу
// : void - означає, що entity нічого не повертає

// 4) ОБ'ЄКТИ, МАСИВИ ТА КОРТЕЖІ

type Person = {
    name: string;
    age: number;
    isAdmin: boolean;
};

type Address = {
    street: string;
    city: string;
    country: string;
}
// : Person - означає, що entity це об'єкт, який має властивості name, age і isAdmin

let personUser: Person

personUser = {
    name: "John",
    age: 30,
    isAdmin: true
}

let address: Address = {
    street: "Main Street",
    city: "New York",
    country: "USA"
}

const common: Person & Address = {
    ...personUser,
    ...address
} // об'єднання об'єктів

let array: string[] = ["apple", "banana", "orange"];
// : string[] - означає, що entity це масив рядків

let tuple: [string, number, boolean] = ["John", 30, true];
// : [string, number, boolean] - означає, що entity це кортеж з трьома елементами

const ReadOnlyArray: ReadonlyArray<string> = ["apple", "banana", "orange"];
// : ReadonlyArray<string> - означає, що entity це масив рядків, який не може бути змінений

// 5) ФУНКЦІЇ

function add(a: number, b: number): number {
    return a + b;
}

// arrow function
type Multiply = (a: number, b: number) => number;

const multiply: Multiply = (a, b) => a * b;

const getNumbers = (...numbers: number[]): number[] => {
    return numbers;
}

// функціональні перегрузки

function sum(a: number, b: number): number;
function sum(a: number, b: number, c: number): number;
function sum(a: number, b: number, c?: number): number {
    if (c !== undefined) {
        return a + b + c;
    }
    return a + b;
}

const sum1 = sum(1, 2);
const sum2 = sum(1, 2, 3);
// const sum3 = sum(1, 2, 3, 4); // помилка

// 6) КЛАСИ І ТИПИ

class Car {
    name: string;
    model: string;
    year: number;

    constructor(name: string, model: string, year: number) {
        this.name = name;
        this.model = model;
        this.year = year;
    }

    getInfo(): string {
        return `${this.name} ${this.model} (${this.year})`;
    }
    // publice - відкрита
    // private - закрита (тільки для класу)
    // protected - захищена (тільки для наслідування)
}

class Bus extends Car {
    constructor(name: string, model: string, year: number) {
        super(name, model, year);
    }
}

new Car("Toyota", "Camry", 2020);


// tsc script1.ts - компілювання
// tsc --init tsconfig.json - створення tsconfig.json