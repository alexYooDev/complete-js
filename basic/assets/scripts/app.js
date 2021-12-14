const defaultResult = 0;
let currentResult = defaultResult; // insert the value copy of the const into let
let logEntries = [];

// Function that returns int-type userInput
const getUserNumberInput = () => {
  return parseInt(usrInput.value);
};

// Generates and writes calculation log
const createOutput = (oprt, before, calcNum) => {
  const calcDesc = `${before} ${oprt} ${calcNum}`;
  outputResult(currentResult, calcDesc); // from vendor file
};

const writeLog = (operationIndentifier, prevResult, operand, newResult) => {
  // object: groupes the related datas
  const logEntry = {
    operation: operationIndentifier,
    prevResult: prevResult,
    operand: operand,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
};

const add = () => {
  const enteredNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNum;
  createOutput('+', initialResult, enteredNum);
  writeLog('Add', initialResult, enteredNum, currentResult);
};

const subtract = () => {
  const enteredNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNum;
  createOutput('-', initialResult, enteredNum);
  writeLog('Subtract', initialResult, enteredNum, currentResult);
};

const multiply = () => {
  const enteredNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNum;
  createOutput('*', initialResult, enteredNum);
  writeLog('multiply', initialResult, enteredNum, currentResult);
};

const divide = () => {
  const enteredNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNum;
  createOutput('/', initialResult, enteredNum);
  writeLog('Divide', initialResult, enteredNum, currentResult);
};

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

//use template literal ; es6 syntax

// let errorMessage = "'An error'" + ' occured!';
// \n : line break <br>, ==> backslash(\) take the special traits away from the special character of a string (escape)
