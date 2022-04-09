# js-callbacks

Function Sequence
-function calls another function
-function passed as an argument to another functio
-can run after another function has finished
-executed in sequence they're called, not defined
Sequence Control

- better control over when to execute a function
- i.e. do a calculation, then display result

# Definition

- A callback is a function passed as an argument to another function

# usage

- Using a callback call the calculator function (myCalculator) with a callback,
  then let the calculator function run the callback after calculation is finished
- example:
  function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
  }

function myCalculator(num1, num2, myCallback) {
let sum = num1 + num2;
myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

-note:

- MyDisplayer = name of function
- It's passed to myCalculator() as an arg

# When to use a callback

- asynchronous functions,
  where one function has to wait for another function
  (like waiting for a file to load)

# Documentation:

    - https://www.w3schools.com/js/js_callback.asp
