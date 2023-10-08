let s = "my" + "string";
console.log();(s);

console.log( '1' + 2 ); // "12"
console.log( 2 + '1' );
console.log(2 + 2 + '1' );
console.log('1' + 2 + 2); 

// No effect on numbers
let x = 1;
console.log( +x ); // 1

let y = -2;
console.log( +y ); // -2

// Converts non-numbers
console.log( +true ); // 1
console.log( +"" );

// everything about github 