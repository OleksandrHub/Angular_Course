// 12) ДЕКОРАТОРИ
// function Logger(constructor: Function) {
//     console.log("Logging...");
//     console.log(constructor);
// }

// @Logger
// class PersonDecorator {
//     name = "Max";

//     constructor() {
//         console.log("Creating person object...");
//     }
// }


// 13) РОЗШИРЕНІ ТИПИ

type isNumber<T> = T extends number ? true : false;

type Type1 = isNumber<number>; // true
type Type2 = isNumber<string>; // false

type TypeBrand = "bwm" | "audi" | "mercedes";
type TypePrice = "100000" | "200000" | "300000";

type CarType = `${TypeBrand} ${TypePrice}`;

const myCar: CarType = "mercedes 200000";