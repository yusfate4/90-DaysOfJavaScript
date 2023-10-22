# Arrow functions, the basics

<p>There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions.

It’s called “arrow functions”, because it looks like this:</p>

``` js
let func = (arg1, arg2, ..., argN) => expression;
```

<p>
This creates a function func that accepts arguments arg1..argN, then evaluates the expression on the right side with their use and returns its result.

In other words, it’s the shorter version of:</p>

``` js
let func = function(arg1, arg2, ..., argN) {
  return expression;
};
```


## Multiline arrow functions

<p>The arrow functions that we’ve seen so far were very simple. They took arguments from the left of =>, evaluated and returned the right-side expression with them.

Sometimes we need a more complex function, with multiple expressions and statements. In that case, we can enclose them in curly braces. The major difference is that curly braces require a return within them to return a value (just like a regular function does).

Like this:

</p>

<
``` js
let sum = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};

alert( sum(1, 2) ); // 3
```


## Summary
Arrow functions are handy for simple actions, especially for one-liners. They come in two flavors:

Without curly braces: (...args) => expression – the right side is an expression: the function evaluates it and returns the result. Parentheses can be omitted, if there’s only a single argument, e.g. n => n*2.
With curly braces: (...args) => { body } – brackets allow us to write multiple statements inside the function, but we need an explicit return to return something.