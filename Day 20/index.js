// Function expressions
// function sayHi(){
//     console.log('Hello')
//     }
//     console.log(sayHi)

function sayHi() {
  console.log("Hello");
}

let func = sayHi;

console.log(func());
sayHi();
