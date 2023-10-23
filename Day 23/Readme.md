# Internals

<p>
An array is a special kind of object. The square brackets used to access a property arr[0] actually come from the object syntax. That’s essentially the same as obj[key], where arr is the object, while numbers are used as keys.

They extend objects providing special methods to work with ordered collections of data and also the length property. But at the core it’s still an object.

Remember, there are only eight basic data types in JavaScript (see the Data types chapter for more info). Array is an object and thus behaves like an object.

For instance, it is copied by reference:
</p>

```js 
let fruits = ["Banana"]

let arr = fruits; // copy by reference (two variables reference the same array)

alert( arr === fruits ); // true

arr.push("Pear"); // modify the array by reference

alert( fruits ); // Banana, Pear - 2 items now
```


## Performance

<p>
Methods push/pop run fast, while shift/unshift are slow.
</p>

<p>Why is it faster to work with the end of an array than with its beginning? Let’s see what happens during the execution:

</p>

```js
fruits.shift(); // take 1 element from the start
```

## Loops
<p>
One of the oldest ways to cycle array items is the for loop over indexes:
</p>

```js
let arr = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr.length; i++) {
  alert( arr[i] );
}
```
<p>But for arrays there is another form of loop, for..of:</p>

```js
let fruits = ["Apple", "Orange", "Plum"];

// iterates over array elements
for (let fruit of fruits) {
  alert( fruit );
}
```

## A word about “length”
<p>
 The length property automatically updates when we modify the array. To be precise, it is actually not the count of values in the array, but the greatest numeric index plus one.

For instance, a single element with a large index gives a big length:
</p>

```js
let fruits = [];
fruits[123] = "Apple";

alert( fruits.length ); // 124
```

## new Array()
<p>
There is one more syntax to create an array:

let arr = new Array("Apple", "Pear", "etc");
It’s rarely used, because square brackets [] are shorter. Also, there’s a tricky feature with it.

If new Array is called with a single argument which is a number, then it creates an array without items, but with the given length.
</p>

```js
let arr = new Array(2); // will it create an array of [2] ?

alert( arr[0] ); // undefined! no elements.

alert( arr.length ); // length 2
```

## Multidimensional arrays
<p>
Arrays can have items that are also arrays. We can use it for multidimensional arrays, for example to store matrices:
</p>


```js
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

alert( matrix[1][1] ); // 5, the central element
```