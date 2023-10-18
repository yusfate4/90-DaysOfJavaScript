# Returning a value

<p>A function can return a value back into the calling code as the result.

The simplest example would be a function that sums two values: </p>

```js
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert( result ); // 3

```

<p>
The directive return can be in any place of the function. When the execution reaches it, the function stops, and the value is returned to the calling code (assigned to result above).
</p>


``` js
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}

let age = prompt('How old are you?', 18);

if ( checkAge(age) ) {
  alert( 'Access granted' );
} else {
  alert( 'Access denied' );
}
```

# Naming a function
<p>
Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.

It is a widespread practice to start a function with a verbal prefix which vaguely describes the action. There must be an agreement within the team on the meaning of the prefixes.

For instance, functions that start with "show" usually show something.

Function starting with…
</p>

- "get…" – return a value,
- "calc…" – calculate something,
- "create…" – create something,
- "check…" – check something and return a boolean, etc.

<p>Examples of such names:</p>

``` js
1. showMessage(..)     // shows a message
2. getAge(..)          // returns the age (gets it somehow)
3. calcSum(..)         // calculates a sum and returns the result
4. createForm(..)      // creates a form (and usually returns it)
5. checkPermission(..) // checks a permission, returns true/false

```


# Functions == Comments

<p>
Functions should be short and do exactly one thing. If that thing is big, maybe it’s worth it to split the function into a few smaller functions. Sometimes following this rule may not be that easy, but it’s definitely a good thing.

A separate function is not only easier to test and debug – its very existence is a great comment!

For instance, compare the two functions showPrimes(n) below. Each one outputs prime numbers up to n.

The first variant uses a label:

</p>

``` js
function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert( i ); // a prime
  }
}

```