// Logical operators

console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);

if (1 || 0) {
  console.log("truthy!");
}

let hour = 12;
let isWeekend = true;
if (hour < 10 || hour > 18 || isWeekend) {
  console.log("The office is closed");
}

console.log(1 || 0);
console.log(null || 1);
console.log(null || 0 || 1);
console.log(undefined || null || 0);

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

console.log(firstName || lastName || nickName || "Anonymous");

// && (AND)
console.log(true && true);
console.log(false && true);
console.log( true && false);
console.log(false && false);


console.log( null || 2 || undefined );
// console.log(alert(1) || 2 || alert(3) );

// Check the range between
let age = 17
if (age >= 16 && age <= 90){
    console.log(age);
}