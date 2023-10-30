"use strict";

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.lastName = this.lastName;
};

const jonas = new Person("Jonas", 1991);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017)
const jack = new Person ('Jack', 1975)
console.log(matilda, jack);

console.log(jonas instanceof Person);

// Prototypes
