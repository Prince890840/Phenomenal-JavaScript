// Function Expression

console.log(notHoisted); // undefined
// Even though the variable name is hoisted,
// the definition isn't. so it's undefined.
notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function () {
  console.log("bar");
};

const calculateAge = function (birthYear) {
  return 2037 - birthYear;
};

console.log(calculateAge);

// Function Declaration

function calcRectArea(width, height) {
  return width * height;
}

console.log(calcRectArea(5, 6));

function calAge(birthYear) {
  return 2037 - birthYear;
}

/* Expression produce a Value where we store it to the variable. */
