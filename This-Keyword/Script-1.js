const calcAge = function (year) {
  console.log(2037 - year);
  console.log(this);
};

calcAge(1991);

const calcArrow = (year) => {
  console.log(2037 - year);
  console.log(this);
};

calcArrow(1980);

const parent = {
  mom_name: "Samantha Quinn",
  mother: function () {
    console.log(this);
    return `${this.mom_name} is my mother.`;
  },
};
console.log(parent.mother());

const matilda = {
  year: 2017,
};

matilda.calcAge = parent.mother;
console.log(matilda); //here this keyword points to matilda not parent.

/* NOTE: Difference between use this keyword in regular function and arrow function,
    arrow function does not have its own this it uses lexical this keyword.
    parent scope of this keyword is window.*/

// ============================================================================================
console.log("================================");

function foo() {
  "use strict";
  console.log("Simple function call");
  console.log(this === window);
}
foo();

/* Note that, if strict mode is enabled for any function then the value of this will be undefined
 because in strict mode global object refers to undefined in place of the window object.*/

function simpleFunction() {
  console.log("Simple function call");
  console.log(this === window);
}

simpleFunction();

console.log("================");

let user = {
  count: 10,
  simpleFunction: simpleFunction,
  anotherFunction: function () {
    console.log(this === window);
  },
};
// console.log(user.anotherFunction);
let myFunction = user.anotherFunction;
myFunction();

var john = {
  name: "john",
  yearOfBirth: 1990,
  calculateAge: function () {
    console.log(this);
    console.log(2016 - this.yearOfBirth);
    function innerFunction() {
      console.log(this);
    }
    innerFunction();
  },
};

/* Inside the calculateAge function, this refers to the calling ‘john’ object. 
But inside innerFunction function, this refers to the global object which in this case is the window object. 
Some people see that as a bug in JS, but the rule says that whenever we do a regular function call, then this will refer to the global object. */

console.log("=========");

var box = {
  color: "green", // 1
  position: 1, // 2
  clickMe: function () {
    // 3
    document.querySelector("body").addEventListener("click", function () {
      var str =
        "This is box number " + this.position + " and it is " + this.color; // 4
      alert(str);
    });
  },
};

//output: ‘This is box number undefined and it is undefined’.

// how can solve this issue using ES5 feature which mentioned below. (see in 65 and 66 lines(scenario))

var box = {
  color: "green",
  position: 1,
  clickMe: function () {
    var self = this;
    document.querySelector("body").addEventListener("click", function () {
      var str =
        "This is box number " + self.position + " and it is " + self.color;
      alert(str);
    });
  },
};
