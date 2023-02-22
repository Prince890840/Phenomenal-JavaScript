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

