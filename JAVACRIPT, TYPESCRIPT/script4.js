// Методи масивів
const userArr = [
    {
        name: "John",
        age: 30,
        isAdmin: true,
    },
    {
        name: "Jane",
        age: 25,
        isAdmin: false,
    },
    {
        name: "Jack",
        age: 40,
        isAdmin: true,
    },
    {
        name: "Jill",
        age: 35,
        isAdmin: false,
    },
    {
        name: "Tom",
        age: 20,
        isAdmin: false,
    },
    {
        name: "Bob",
        age: 45,
        isAdmin: false,
    },
];

const userIsAdmin = {
    isAdmin: 0,
    isNotAdmin: 0,
}

userArr.forEach(function(user, index) {
    if (user.isAdmin) {
        userIsAdmin.isAdmin++;
    } else {
        userIsAdmin.isNotAdmin++;
    }
});

console.log(userIsAdmin);

 // це викликати функцію для кожного елемента масиву

const filteredUsers = userArr.filter(user => user.age >= 30);

console.log(filteredUsers);

// map
const userNames = userArr.map(function(user) {
    return user.isAdmin ? user.name + " (Admin)" : user.name + " (Guest)";
});

console.log(userNames);

// reduce
const AvgAge = userArr.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue.age / userArr.length;
}, 0);

console.log(AvgAge);

// find
const userTom = userArr.find(function(user) {
    return user.name === "Tom";
});

console.log(userTom);

// sort
const sortedUsers = userArr.sort(function(a, b) {
    return a.age - b.age;
});

console.log(sortedUsers);

// reverse
// const reversedUsers = userArr.reverse();

// console.log(reversedUsers);

// some - це метод що перевіряє чи є хоча б один елемент у масиві який задовольняє умову
const hasAdmin = userArr.some(function(user) {
    return user.isAdmin;
});

console.log(hasAdmin);

// every - це метод що перевіряє чи всі елементи у масиві який задовольняє умову
const allAdmin = userArr.every(function(user) {
    return user.isAdmin;
});

console.log(allAdmin);

// findIndex
const indexTom = userArr.findIndex(function(user) {
    return user.name === "Tom";
});

console.log(indexTom);

// Arrow Function

const sayHello = () => {
    console.log("Hello");
};

sayHello();

const sayHello2 = () => alert("Hello");

sayHello2();


