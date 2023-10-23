# Arrays
<p>
Objects allow you to store keyed collections of values. That’s fine.

But quite often we find that we need an ordered collection, where we have a 1st, a 2nd, a 3rd element and so on. For example, we need that to store a list of something: users, goods, HTML elements etc.

It is not convenient to use an object here, because it provides no methods to manage the order of elements. We can’t insert a new property “between” the existing ones. Objects are just not meant for such use.

There exists a special data structure named Array, to store ordered collections.
</p>

## Declaration
<P>There are two syntaxes for creating an empty array:
</P>

```js
let arr = new Array();
let arr = [];

```

<p>Array elements are numbered, starting with zero.

We can get an element by its number in square brackets:</p>

```js 
let fruits = ["Apple", "Orange", "Plum"];

alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange
alert( fruits[2] ); // Plum
```

## Methods pop/push, shift/unshift

<p>A queue is one of the most common uses of an array. In computer science, this means an ordered collection of elements which supports two operations:
</p>


- push appends an element to the end.

- shift get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st.


<p>
There’s another use case for arrays – the data structure named stack.

It supports two operations:

- push adds an element to the end.
- pop takes an element from the end.</p>

### Methods that work with the end of the array:

pop
Extracts the last element of the array and returns it:

- pop
Extracts the last element of the array and returns it:

```js
let fruits = ["Apple", "Orange", "Pear"];

alert( fruits.pop() ); // remove "Pear" and alert it

alert( fruits ); // Apple, Orange

```



#### push
Append the element to the end of the array:
```js 
let fruits = ["Apple", "Orange"];

fruits.push("Pear");

alert( fruits ); // Apple, Orange, Pear
```

### shift
Extracts the first element of the array and returns it:
```js
let fruits = ["Apple", "Orange", "Pear"];

alert( fruits.shift() ); // remove Apple and alert it

alert( fruits ); // Orange, Pear
```


### unshift
<p> 
Add the element to the beginning of the array:
</p>
```js
let fruits = ["Orange", "Pear"];

fruits.unshift('Apple');

alert( fruits ); // Apple, Orange, Pear
```
<p>
Methods push and unshift can add multiple elements at once:

```js
let fruits = ["Apple"];

fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");

// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
alert( fruits );
</p>

### Methods push and unshift can add multiple elements at once:

```js 
let fruits = ["Apple"];

fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");

// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
alert( fruits );
```
