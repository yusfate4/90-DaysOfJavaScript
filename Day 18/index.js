// function showMessage() {
//     console.log( 'Hello everyone!' );
//   }

//   showMessage();
//   showMessage();

//   function showMessage() {
//     let message = "Hello, I'm JavaScript!"; // local variable

//     console.log( message );
//   }

//   showMessage(); // Hello, I'm JavaScript!

//   console.log( message );

function showMessage(from, text) {
  from = "*" + from + "*";

  console.log(from + ": " + text);
}

let from = "Ann";

showMessage(from, "Hello");

console.log(from);

// Returning a value
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
console.log(result);
