// Massive
const arr = [
    "Hello",
    "World",
    "How",
    "Are",
    "You",
    {name: "John", age: 30},
    () => {
        console.log("Hello, World!");
    },
    [1, 2, 3],
]

console.log("arr", arr);
console.log("arr[0]", arr[0]);
console.log("arr[1]", arr[1]);
console.log(arr[5]["name"]);

// arr[0] = "Hi";
// console.log("arr", arr);

arr[arr.length] = "New Element";
console.log("arr", arr);

// console.log("arr.at(0)", arr.at(-1));
// методи
arr.push("New Element", "New Element2");
console.log("arr", arr);

arr.pop();
console.log("arr", arr);

arr.unshift("New Element", "New Element2");
console.log("arr", arr); // Додавання на початок

arr.shift();
console.log("arr", arr); // Видалення з початку

console.log(arr.toString());
console.log(arr.join(" "));

// Massive Copy

const arr2 = arr;
console.log("arr2", arr2); // No copy

const arr3 = arr.slice();
console.log("arr3", arr3); // Copy

const arr4 = [...arr];
console.log("arr4", arr4); // Copy

const arr5 = [];
for (let i = 0; i < arr.length; i++) {
    arr5[i] = arr[i];
}
console.log("arr5", arr5); // Copy

// Massive Join

const arr6 = [1, 2, 3];
const arr7 = [4, 5, 6];
const arr8 = arr6.concat(arr7);
console.log("arr8", arr8);

const arr9 = [...arr6, ...arr7];
console.log("arr9", arr9);

// Massive comparison
const comparisonArray = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
        const areValueArray = Array.isArray(arr1[i]) && Array.isArray(arr2[i]);

        if (areValueArray) {
            return comparisonArray(arr1[i], arr2[i]);
        } else {
            continue
        }
    }
    return true;
}


console.log(comparisonArray(arr6, arr6));
console.log(comparisonArray(arr6, arr7));

// Methods

