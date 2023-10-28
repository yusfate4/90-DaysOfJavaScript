# Objects

<p>
Objects are used to store keyed collections of various data and more complex entities. In JavaScript, objects penetrate almost every aspect of the language. So we must understand them first before going in-depth anywhere else.

An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.
</p>

## Literals and properties
<p>
We can immediately put some properties into {...} as “key: value” pairs:
</p>

```js
let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};
```

## Square brackets
<p>
For multiword properties, the dot access doesn’t work:
</p>

```js
// this would give a syntax error
user.likes birds = true
```

## Computed properties

<p>
We can use square brackets in an object literal, when creating an object. That’s called computed properties.

For instance:</p>

```js
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"
```

## Property value shorthand
<p>In real code, we often use existing variables as values for property names.

For instance:

</p>

```js 
function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

let user = makeUser("John", 30);
alert(user.name); // John
```

## Property names limitations

<p>As we already know, a variable cannot have a name equal to one of the language-reserved words like “for”, “let”, “return” etc.

But for an object property, there’s no such restriction:

</p>

```js 
// these properties are all right
let obj = {
  for: 1,
  let: 2,
  return: 3
};

alert( obj.for + obj.let + obj.return ); 
```

## Property existence test, “in” operator

<p>
A notable feature of objects in JavaScript, compared to many other languages, is that it’s possible to access any property. There will be no error if the property doesn’t exist!

Reading a non-existing property just returns undefined. So we can easily test whether the property exists:</p>

```js
let user = {};

alert( user.noSuchProperty === undefined ); // true means "no such property"
```

## The "for..in" loop

<p>To walk over all keys of an object, there exists a special form of the loop: for..in. This is a completely different thing from the for(;;) construct that we studied before.

The syntax:</p>

```js
for (key in object) {
  // executes the body for each key among object properties
}
```