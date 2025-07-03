// OOP
// console.log("this is script6.js", this);

const Person = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        country: "USA",
        getFullAddress: function() {
            return `${this.city}, ${this.country}`;
        },
        logThis: function() {
            console.log(this);
        }
    },
    greet: function() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    },
    logThis () {
        console.log(this);
    }
}

// console.log(Person);
// console.log(Person.name);
// console.log(Person.age);
// console.log(Person.greet());   
// Person.logThis();

// Person.address.logThis();
// console.log(Person.address.getFullAddress());
// console.log(Person.address.city);
// console.log(Person.address.country);

const user1 = {
    name: "Alice",
}

const user2 = {
    name: "Bob",
}

function logThis() {
    console.log("this", this);
    console.log("this.name", this.name);
}

logThis(); // this is the global object in non-strict mode, undefined in strict mode

// user1.logThis = logThis;
// user2.logThis = logThis;

// user1.logThis(); // this is user1
// user2.logThis(); // this is user2

const calculator = {
    read(){
        this.a = +prompt("Enter first number:", 0);
        this.b = +prompt("Enter second number:", 0);
    },
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    },
}

calculator.read();
console.log("Sum:", calculator.sum());
console.log("Mul:", calculator.mul());
console.log(calculator);