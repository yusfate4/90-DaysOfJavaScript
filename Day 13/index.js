// let i = 3;

// while (i) {
//   console.log(i--);
// }

// let i = 0;
// while (++i < 5) console.log( i );

// let j = 0;
// while (j++ < 5) console.log( j );

// for (let i = 0; i < 5; i++) console.log( i );

// for (let i = 0; i < 5; ++i) console.log( i );

// Output even numbers in the loop
for (let i = 2; i < 10; i++) {
  if (i % 2 == 0) console.log(i);
}

let i = 0;
while (i < 3) {
  console.log(`number ${i}!`);
  i++;
}

let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

let n = 10;

nextPrime: for (let i = 2; i <= n; i++) {
  // for each i...

  for (let j = 2; j < i; j++) {
    // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  console.log(i);
}
