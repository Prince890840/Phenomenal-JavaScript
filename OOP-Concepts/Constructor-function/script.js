"use strict";

// Constructor function and new Operator

//  we can consider this constructor function as a blueprint.
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

const jonas = new Person("Jonas", 1991);
jonas.nationality = "Indian";

console.log(jonas);

/* here representation of how the construction function works.
   1. New {} is created 
   2. function is called, this = {}
   3. {} linked to prototype
   4. function automatically return {}*/

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);

console.log(matilda, jack);

// here matilda,jack and jonas is a instanceof the Person.
console.log(jonas instanceof Person);

// rest of it gives an error that the "" (name) is not defined.
