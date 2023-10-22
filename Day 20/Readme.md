# Function expressions

### In JavaScript, a function is not a “magical language structure”, but a special kind of value.

<P> The syntax that we used before is called a Function Declaration:
</P>

``` js
function sayHi() {
  alert( "Hello" );
}
```

<p>There is another syntax for creating a function that is called a Function Expression.

It allows us to create a new function in the middle of any expression.

For example:</p>

``` js 
let sayHi = function() {
  alert( "Hello" );
};
```
``` js
function sayHi(){
console.log('Hello')
}
console.log(sayHi)
```

### Callback functions
<p>Let’s look at more examples of passing functions as values and using function expressions.
</p>

<p>The function should ask the question and, depending on the user’s answer, call yes() or no():</p>

``` js
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);

```



### Function Expression vs Function Declaration
<p>Let’s formulate the key differences between Function Declarations and Expressions.

First, the syntax: how to differentiate between them in the code.

</p>

- Function Declaration: a function, declared as a separate statement, in the main code flow:
``` js
// Function Declaration
function sum(a, b) {
  return a + b;
}
```
