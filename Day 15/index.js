// Challenge 1: Even or Odd

// Write a JavaScript function that takes a number as an argument
// and returns whether it's even or odd using conditionals.

function num(x) {
  if (x % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(num(8));
console.log(num(23));

// Challenge 2: FizzBuzz

// Write a program that prints the numbers from 1 to 100.
//  But for multiples of 3, print "Fizz" instead of the number,
//  and for multiples of 5, print "Buzz." For numbers that are
// multiples of both 3 and 5, print "FizzBuzz."

for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// Challenge 3: Factorial
// Write a function that calculates the factorial of a given
// number using a loop. The factorial of a non-negative integer n,
// denoted as n!, is the product of all positive integers less than or equal to n.

function factorial(n) {
  if (n < 0) {
    return "Factorial is undefined for negative numbers.";
  } else if (n === 0 || n === 1) {
    return 1;
  } else {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}


console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(-3));
