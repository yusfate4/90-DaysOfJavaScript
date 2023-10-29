# Object-oriented programming


<P>Object-oriented programming (OOP) is a programming paradigm fundamental to many programming languages, including Java and C++. In this article, we'll provide an overview of the basic concepts of OOP. We'll describe three main concepts: classes and instances, inheritance, and encapsulation.</P>


# Classes and instances

<P>When we model a problem in terms of objects in OOP, we create abstract definitions representing the types of objects we want to have in our system. For example, if we were modeling a school, we might want to have objects representing professors. Every professor has some properties in common: they all have a name and a subject that they teach. </P>

In pseudocode, a Professor class could be written like this:

```js
class Professor
    properties
        name
        teaches
    methods
        grade(paper)
        introduceSelf()
```

<p>
This defines a Professor class with:

- two data properties: name and teaches
- two methods: grade() to grade a paper and introduceSelf() to introduce themselves.
</p>

# Inheritance

<p>Suppose in our school we also want to represent students. Unlike professors, students can't grade papers, don't teach a particular subject, and belong to a particular year.
</p>

```js
class Student
    properties
        name
        year
    constructor
        Student(name, year)
    methods
        introduceSelf()
```        

<p>We start by observing that students and professors are both people, and people have names and want to introduce themselves. We can model this by defining a new class Person, where we define all the common properties of people. Then, Professor and Student can both derive from Person, adding their extra properties:

</p>


```js
class Person
    properties
        name
    constructor
        Person(name)
    methods
        introduceSelf()

class Professor : extends Person
    properties
        teaches
    constructor
        Professor(name, teaches)
    methods
        grade(paper)
        introduceSelf()

class Student : extends Person
    properties
        year
    constructor
        Student(name, year)
    methods
        introduceSelf()
```        

# Encapsulation

<p>Objects provide an interface to other code that wants to use them but maintain their own internal state. The object's internal state is kept private, meaning that it can only be accessed by the object's own methods, not from other objects. Keeping an object's internal state private, and generally making a clear division between its public interface and its private internal state, is called encapsulation.</p>

<p>For example, suppose students are allowed to study archery if they are in the second year or above. We could implement this just by exposing the student's year property, and other code could examine that to decide whether the student can take the course:</p>

```js
if (student.year > 1) {
  // allow the student into the class
}
```

# Classes and constructors
<p>You can declare a class using the class keyword. Here's a class declaration for our Person from the previous article:</p>

```js
class Person {
  name;

  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`);
  }
}
```