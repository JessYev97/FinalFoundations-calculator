let firstValue = Number();
let secondValue = Number();
const addNums = function(firstValue, secondValue) {
  let result = firstValue + secondValue;
  console.log(result); 
}
const subtractNums = function(firstValue, secondValue) {
  let result = firstValue - secondValue;
  console.log(result); 
}
const multiplyNums = function(firstValue, secondValue) {
  let result = firstValue * secondValue;
  console.log(result); 
}
const divideNums = function(firstValue, secondValue) {
  let result = firstValue / secondValue;
  //return result;
  console.log(result); 
}
subtractNums(10, 5);
addNums(10, 5);
multiplyNums(10, 5);
divideNums(10, 5);
// I'm going to try to condense this repeated code into one function with if statements