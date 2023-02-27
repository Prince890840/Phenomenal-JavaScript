"use strict";

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michel", "Peter", "Steven"],
};

console.log(jonas);

const namekey = "Name";
console.log(jonas["first" + namekey]);

/*const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends"
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong result! Choose between firstName, lastName, Job and friends."
  );
}*/

console.log("========================");

const bio = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michel", "Peter", "Steven"],
  hasDriversLicense: true,
  birthYear: 1991,

  //   because of function produces a value
  clacAge: function () {
    console.log(this);
    // bio is only one who calling this object
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.clacAge()} - year old ${
      bio.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(bio.clacAge());
console.log(bio.getSummary());
console.log(bio.age);

//Array Destructuring
let fruits = ["Apple", "Banana"];
let [a, b] = fruits;
console.log(a, b);

//Object Destructuring
let person = { name: "Peter", age: 28 };
let { name, age } = person;
console.log(name, age);

// more about object Destructuring

function getMobile(manufacturer, model, year) {
  return {
    manufacturer,
    model,
    year,
  };
}
console.log(getMobile("Samsung", "Galaxy", "2020"));

// multiword property names in Object

let user = {
  name: "jhon",
  status: "married",
  age: 30,
  "Like birds": true,
};

console.log(user);

// multiword property name must be quoted
// How can you access multiword property

user["Like birds"] = false;

console.log(user);

// How can you delete particular properties

// delete
delete user.status;

console.log(user);

const bioGraphy = {
  name: "prince",
  age: 22,
  status: "unmarried",
};

console.log(Number(bioGraphy));

let n = +bioGraphy; // unary plus
console.log(n);

let user2 = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  },
};

// conversions demo:
console.log(user2); // hint: string -> {name: "John"}
console.log(+user2); // hint: number -> 1000
console.log(user2 + 500); // hint: default -> 1500
