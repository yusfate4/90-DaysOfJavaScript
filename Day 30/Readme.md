# The 4 Fundamental OOP Principles

- Abstraction
- Encapsulation
- Inheritance
- Polymorphism

## Abstraction

<p>
Abstraction: Ignoring or hiding details that don't matter, allowing us to get an overview perspective of the thing we're implementing, instead of messing with details that don't really matter to our implementation
</p>

## Encapsulation

<p>Encapsulation: Keeping properties and methods private inside the class, so they are not accessible from outside the class. Some methods can be exposed as a public interface (API).</p>

## Inheritance

<p>Inheritance: Making all properties and methods of a certain class available to a child class, forming a hierarchical relation between classes. This allows us to reuse common logic and to model real-world relationships </p>

## Polymorphism

<p>Polymorphism: A child class can overwrite a method it inherited from a parent class [it's more complex that that, but enough for our purposes].</p>


# 3 ways of Implementing prototypal inheritance in Javascript

1) Constructor functions
 - Technique to create objects from a function;
 - This is how built-in objects like Arrays, Maps or a Sets are actually implemented.
2) ES6 Classes
   - Modern alternative to constructor function syntax;
   - "Syntactic sugar" behind the scenes, ES6 classes work exactly like constructor funtions;
   - ES6 classes do not behave like classes in "classical OOP"
3) Object.create()
   - The easiest and most straight forward way of linking an objects to a prototype object