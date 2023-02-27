var x = "global";
function foo() {
  var x = "function";
  console.log(
    "Outer variable is said to be shadowed by the function-scoped variable."
  );
}

foo();

/* What is Variable Shadowing - shadowing occurs when a variable declared in a certain scope (e.g. a local variable) has the same name as a variable in an outer scope (e.g. a global variable)*/

// disadvantages of Variable Shadowing

function boo(x) {
  let y = x;
  {
    let x = 10; // x is shadowed by y
    y = 20;
    document.getElementById("result1").innerHTML = x;
  }
  document.getElementById("result2").innerHTML = x;
}
boo(20);

// here the variable swapped  inside the block scoped. so, code can be confusing.
