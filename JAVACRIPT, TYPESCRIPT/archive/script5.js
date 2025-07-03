// OOP
// const Person = {
//     name: "John",
//     age: 30,

//     greet: () => {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     },
// }

// console.log(Person);
// console.log(Person.name);
// console.log(Person.age);
// console.log(Person.greet());

// Person.name = "Jane";
// Person.school = "High School";
// console.log(Person);

// delete Person.age;
// console.log(Person);

//#region Section2
// const name = "Alice";
// const age = 25;

// const user = { name, age, }

// console.log(user);

// const addValue = prompt("Enter a value to add to the user object:");
// user[addValue] = "New Value";
// console.log('name' in user);

// for (const key in user) {
//     console.log(`${key}: ${user[key]}`);
// }
//#endregion

//#region Порівання об'єктів
const obj1 = { name: "Alice", age: 25, obj3 : { name: "Alice", age: 25 } };
const obj2 = { name: "Alice", age: 25 , obj3 : { name: "Alice", age: 25 } };

// сonsole.log(obj1 === obj2); // false, бо це різні об'єкти в пам'яті
// const obj3 = obj1;
// сonsole.log(obj1 === obj3); // true, бо це той самий об'єкт 

const areObjectsEqual = (objA, objB) => {
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);

    // console.log("Keys of objA:", keysA);
    // console.log("Keys of objB:", keysB);

    if (keysA.length !== keysB.length) {
        return false;
    }

    for (const key of keysA) {
        const valueA = objA[key];
        const valueB = objB[key];
        const isValueAObject = 
            typeof valueA === 'object' && typeof valueB === 'object';

        if (isValueAObject) {
            return areObjectsEqual(valueA, valueB);
        }

        if (valueA !== valueB) {
            return false;
        }
    }
    return true;

}

console.log(areObjectsEqual(obj1, obj2)); // true
//#endregion

//#region Копіювання об'єктів
const obj4 = Object.assign({}, obj1); // shallow copy
const obj5 = { ...obj1 }; // spread operator

// console.log(obj4);
// console.log(obj5);

//#endregion

//#region Об'єднання об'єктів
const obj7 = Object.assign({}, obj1, obj2); // shallow copy
const obj6 = { ...obj1, ...obj2 }; // spread operator
// console.log("obj6:", obj6);
// console.log("obj7:", obj7);
// #endregion

console.log(obj1.obj3?.name); // Optional chaining якщо obj3 не існує, то поверне undefined, а не помилку

//#region Деструктуризація об'єктів
const person = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        country: "USA"
    }
};

// const { name, age, address: { city, country } } = person;
// console.log('Name:', name); // John
// console.log('Age:', age); // 30
// console.log('City:', city); // New York
// console.log('Country:', country); // USA


const logPerson = ({ name: personName, age = "Unknown", address: { city: bigCity = "Unknown", country } }) => {
    console.log(`Name: ${personName}, Age: ${age}, City: ${bigCity}, Country: ${country}`);
};
logPerson(person); // Name: John, Age: 30, City: New York, Country: USA

logUser =  (user) => {
    const { name: userName, age: userAge = "Unknown", ...otherInfo } = user;
    console.log(`User Name: ${userName}, User Age: ${userAge}`);
    console.log('Other Info:', otherInfo); // Uncomment to see other properties
};

logUser({ name: "Alice", age: 25, city: "London", country: "UK", company: "Google" }); // User Name: Alice, User Age: 25

//#endregion