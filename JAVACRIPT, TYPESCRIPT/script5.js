// Об'єкти та примітиви
// Об'єкти
const person = {
    name: "John",
    age: 30,
    isStudent: true,
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "10001",
    },
};

// Примітиви
const name = "John";
const age = 30;
const isStudent = true;
const address = {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
};

const person2 = {...person}; // Copy object

// shallow copy and deep copy object

const obj1 = {
    name: "John",
    age: 30,
    favoriteFood : {
        sweet : "cake",
        sour : "apple",

    }
}

// const obj2 = obj1; // No copy
const obj2 = {...obj1}; obj2.name = "Jane"; // Copy object shallow
const obj3 = Object.assign({}, obj1); obj3.name = "Jan"; // Copy object shallow
const obj4 = JSON.parse(JSON.stringify(obj1));  obj4.name = "Jack"; // Copy object, no copy function, object in object shallow
// lodash cloneDeep

// console.log(obj1);
// console.log(obj2);
// console.log(obj3);
// console.log(obj4);

// clone array

const arr1 = [1, 2, 3, 4, 5, function(){ console.log("Hello, World!"); }, {name: "John", age: 30}];
const arr2 = [...arr1]; // Copy array shallow
const arr3 = arr1.slice(); // Copy array shallow
const arr4 = JSON.parse(JSON.stringify(arr1)); // Copy array shallow    
// lodash cloneDeep
const arr5 = _.cloneDeep(arr1); // Copy array deep
console.log(arr5);

// Асинхроний JS
console.log("Start");

console.log("GO")
console.log("Money")

setTimeout(() => {
    console.log("Hello, World!");
}, 1000); // спершу виконується синхроний код а потім асинхроний

console.log("GO")
console.log("Money")

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log("GO")
console.log("Money")

console.log("End");

// http request and fetch
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(json => console.log(json))

