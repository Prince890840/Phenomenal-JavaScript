"use strict";

const Person = function (firstName, birthYear) {
  console.log(this);

  //instance properties.
  this.firstName = firstName;
  this.birthYear = birthYear;

  //instance methods
  //never create methods inside constructor function, it is a bad practice
  this.calcAge = function () {
    console.log(2037 - birthYear);
  };
};

const jonas = new Person("jonas", 2017);

const matilda = new Person("Prince", 2015);

// Prototype
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();

console.log(Person.prototype); // object
console.log(jonas.prototype); // undefined
console.log(jonas.__proto__); // object

console.log(jonas.toString()); // "[object Object]"

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

/* Prototypes - it's are the mechanism by which Javascript objects inherits features from one another. 
->  The Prototype is an object that is associated with every functions and 
    objects by default in JavaScript, where function's prototype property is 
    accessible and modifiable and object's prototype property (aka attribute) 
    is not visible.
->  Every function includes prototype object by default.*/
