const defaultResult = 0;
let currentResult = defaultResult; // insert the value copy of the const into let

const getUserNumberInput = () => {
  return parseInt(usrInput.value);
};

const createOutput = (oprt, before, calcNum) => {
  const calcDesc = `${before} ${oprt} ${calcNum}`;
  outputResult(currentResult, calcDesc);
};

const add = () => {
  const enteredNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNum;
  createOutput('+', initialResult, enteredNum);
};

const subtract = () => {
  const enteredNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNum;
  createOutput('-', initialResult, enteredNum);
};

const multiply = () => {
  const enteredNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNum;
  createOutput('*', initialResult, enteredNum);
};

const divide = () => {
  const enteredNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNum;
  createOutput('/', initialResult, enteredNum);
};

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

//use template literal ; es6 syntax

// let errorMessage = "'An error'" + ' occured!';
// \n : line break <br>, ==> backslash(\) take the special traits away from the special character of a string (escape)
