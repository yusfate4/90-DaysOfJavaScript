console.log(9007199254740991 + 1);
console.log(9007199254740991 + 2);

const bigInt = 1234567890123456789012345678901234567890n;

// String
let name = "John";

console.log(`Hello, ${name}!`);

console.log(`the result is ${1 + 2}`);

let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false;

// The null value
// let age = null;
// console.log(age);

// The “undefined” value
let age;

console.log(age);

typeof undefined; // "undefined"

typeof 0; // "number"

typeof 10n; // "bigint"

typeof true; // "boolean"

typeof "foo"; // "string"

typeof Symbol("id"); // "symbol"

typeof Math; // "object"  (1)

typeof null; // "object"  (2)

typeof alert; // "function"  (3)

let name2 = "Yusuf";
console.log(`hello ${1}`);
console.log(`hello ${"name"}`);
console.log(`hello ${name2}`);
