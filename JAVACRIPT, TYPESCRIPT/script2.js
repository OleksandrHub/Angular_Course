// Функції
// function declaration
function sayHello(text, age = 18, /* параметр */) { // функція
    alert("Hello " + (text ?? ", Friend!"));
    if (age >= 18) {
        alert("You are an adult");
    } else {
        alert("You are a child");
    }
    return text; // повернення значення
}

// sayHello(undefined);
// console.log(sayHello("World", 16))

// function expression
const sayHello2 = function (text) {
    alert("Hello " + text);
};
// sayHello2("World");

// arrow function
const sayHello3 = (text) => {
    alert("Hello " + text);
};
// sayHello3("World");

// Objects methods
const user = {
    name: "John",
    age: 30,
    isAdmin: true,
    sayHello: function () {
        alert("Hello " + this.name);
    },
    sayHello2: () => {
        alert("Hello " + this.name);
    },
};
// user.sayHello();
// user.sayHello2();

// Massive
const userArr = [
    "John",
    "Jane",
    "Jack",
    "Jill",
];

// console.log(userArr);
// console.log(userArr[0]);
// console.log(userArr[0].name);

userArr.push( "Tom" //add to the end
);

// console.log(userArr);

userArr.pop(); //delete from the end
// console.log(userArr);

userArr.shift(); //delete from the beginning
// console.log(userArr);

userArr.unshift("Jonie" //add to the beginning
);
// console.log(userArr);

userArr.splice(1, 2, "Bob"); //delete from the middle
// console.log(userArr);

// console.log(userArr.length);

function congrateUser(user) {
    if (userArr.length > 100) {
        // console.log("Too many users! Yes, it's a lot of users!");
    } else {
        // console.log("Too few users");

    }
} 

congrateUser(userArr);

// Цикли

// for (let i = 0; i < userArr.length; i++) {
//     console.log(userArr[i]);
// }

// for (let user of userArr) {
//     console.log(user);
// }

const userObj = {
    name: "John",
    age: 30,
    isAdmin: true,
};

// for (let i in userObj) {
    // console.log(i, userObj[i]);
// }

// let i = 0;
// while (i < userArr.length) {
//     console.log(userArr[i]);
//     i++;
// }

// do {
//     console.log(userArr[i]);
//     i++;
// } while (i < userArr.length);

const numbers = [1, 2, 3, 4, 5];

function powInSquare(array){
    for (let i = 0; i < array.length; i++) {
        array[i] **= 2;
    }
    return array;
}

// console.log(powInSquare(numbers));

// Scope or Області видимості

let a = 1; // глобальна змінна
if (true) {
    let b = 2; // локальна змінна
    // console.log(a);
    // console.log(b);
}
// console.log(a);
// console.log(b);

function test(argument){
    function test2(){
        // console.log(argument);
    }
    test2();
}

test(123);

//  Різниця між let та var в JavaScript є така:
//  var змінюється в глобальному контексті, а let - в локальному контексті.
// Приклади:
var c = 1;
if (true) {
    var c = 2;
    console.log(c); // виведе 2
}
console.log(c); // виведе 2

let b = 1;
if (true) {
    let b = 2;
    console.log(b); // виведе 2
}
console.log(b); // виведе 1

// Practice

const people = [
    { 
        name: "Ross",
        sex: "male"
    },
    { 
        name: "Rachel",
        sex: "female"
    },
    { 
        name: "Joey",
        sex: "male"
    },
    { 
        name: "Monica",
        sex: "female"
    },
    { 
        name: "Chandler",
        sex: "male"
    },
    { 
        name: "Phoebe",
        sex: "female"
    }
];

function describePeople(people) {
    for (let i = 0; i < people.length; i++) {
        if (people[i].sex === "male") {
            people[i].name += " handsome";
        } else {
            people[i].name += " beautiful";
        }
    }
    return people;
}

console.log(describePeople(people));
