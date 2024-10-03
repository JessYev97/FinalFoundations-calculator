let firstValue = '';
let secondValue = '';
let operator = '';
const displayValue = document.querySelector('#display');

const addNums = function(firstValue, secondValue) {
  return firstValue + secondValue;
}
const subtractNums = function(firstValue, secondValue) {
  return firstValue - secondValue;
}
const multiplyNums = function(firstValue, secondValue) {
  return firstValue * secondValue;
}
const divideNums = function(firstValue, secondValue) {
  return firstValue / secondValue; 
}


const operate = function(firstValue, secondValue, operator) {
  firstValue = parseFloat(firstValue);
  secondValue = parseFloat(secondValue); 
  if (operator == "+") {
     return addNums(firstValue, secondValue);

  } else if ( operator == "-") {54
    return subtractNums(firstValue, secondValue);

  } else if (operator == "*") {
    return multiplyNums(firstValue, secondValue); 

  } else if (operator == "/") {
    if (firstValue === 0 || secondValue === 0) {
      return "no shot"
    } else {
     return divideNums(firstValue, secondValue);
    }
  } 
}

function populateDisplay(value) {
  displayValue.textContent = value;
}

function handleNumber(num) {

  if (operator === '') {
    firstValue += num; 
    populateDisplay(firstValue);
  } else {
    secondValue += num;
    populateDisplay(secondValue);
  } 
}

function handleOperator(op) {
  if (firstValue !== '') {
    operator = op;
    populateDisplay(firstValue + '' + operator + '');  }}

function updateCalculation(selection) {
  displayValue.textContent += selection;
} 
  document.querySelectorAll(".button").forEach(button => {
    button.addEventListener("click", (e) => {
      const value = e.target.getAttribute('data-value');
      if (e.target.classList.contains('number')) {
        handleNumber(value);
      } else if (e.target.classList.contains('operator')) {
        handleOperator(value);
      } else if (e.target.classList.contains('equals')) {
        const result = operate(parseFloat(firstValue), parseFloat(secondValue), operator);
        populateDisplay(result);
        firstValue = result;
        secondValue = '';
        operator = ''; 
      } else if (e.target.classList.contains("clear")) {
        firstValue = '';
        secondValue = '';
        operator = ''; 
        populateDisplay(''); 
      }
    })
  console.log(display);
  }) 
  

