// 7) ІНТЕРФЕЙСИ
// 8) ТИПИ VS. ІНТЕРФЕЙСИ

// Інтерфейси - це те, що ми використовуємо в TypeScript. Вони використовуються для опису типів, які використовуються в програмі.
// Типи - це типи, які використовуються в програмі.
// Інтерфейси використовуються для опису структури об'єктів, які використовуються в програмі.
// Типи використовуються для опису структури даних, які використовуються в програмі.

interface IUser {
    name: string;
    age: number;
    isAdmin: boolean;
}

interface ISchoolUser extends IUser {
    school: string;
    grade: number;
}

type TUser = {
    name: string;
    age: number;
    isAdmin: boolean;
}

type TSchoolUser = TUser & {
    school: string;
    grade: number;
}

// const personaluser: IUser = {
//     name: "John",
//     age: 30,
//     isAdmin: true
// }


// ENUM І ЙОГО ТИПИ

enum EnumRoles {
    ADMIN = "ADMIN",
    USER = "USER",
    GUEST = "GUEST"
}

interface IUser {
    name: string;
    age: number;
    isAdmin: boolean;
    role: EnumRoles;
}

let SuperUser: IUser = {
    name: "John",
    age: 30,
    role: EnumRoles.ADMIN,
    isAdmin: true
}

const enum Colors {
    RED = "red",
    GREEN = "green",
    BLUE = "blue"
}

let color: Colors = Colors.RED;

// // Reverse mapping
//
// console.log(Colors[Colors.RED]); // red
// console.log(Colors.RED); // 0

// 10) ТВЕРДЖЕННЯ (ASSERTIONS)

const inputElement = document.getElementById("input") as HTMLInputElement;
const inputElement2 = <HTMLInputElement>document.getElementById("input");
const inputElement3 = document.getElementById("input") as unknown as HTMLInputElement;

const value = inputElement.value;
const value2 = inputElement2.value;
const value3 = inputElement3.value;

const getLength = (text: string | null): number => {
    return text!.length; // ! - вказуємо, що це не null або undefined
}

// Generics

function getArray<T extends Array<any>>(args: T): T {
    return args;
}

let entity1 = getArray(["Hello"]);
let entity2 = getArray([123]);

// 11) РІЗНІ УТИЛІТИ ТИПІВ

interface ICar {
    id: number;
    name: string;
    model: string;
    year: number;
}

interface ICarCreate extends Omit<ICar, "id"> {
}
// Omit - видаляє певну властивість
// Pick - вибирає певну властивість
// Partial - змінює всі властивості на опціональні

// Readonly - змінює всі властивості на readonly
// Required - змінює всі властивості на обов'язкові
// ReturnType - повертає тип поверненого значення функції

// Extract - вибирає певну властивість з типу 
// Exclude - видаляє певну властивість з типу
// NonNullable - видаляє null і undefined

const car: ICarCreate = {
    name: "Toyota",
    model: "Camry",
    year: 2020
}