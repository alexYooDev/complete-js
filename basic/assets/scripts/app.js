const defaultResult = 39;
let currentResult = defaultResult; // insert the value copy of the const into let
let num = 3;

const add = (x, y) => {
  const result = x + y;
  return result;
};

currentResult = add(currentResult, num);

let calculationDesc = `${defaultResult} + ${num}`;
//use template literal ; es6 syntax

// let errorMessage = "'An error'" + ' occured!';
// \n : line break <br>, ==> backslash(\) take the special traits away from the special character of a string (escape)

outputResult(currentResult, calculationDesc);
