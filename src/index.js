
// console.log(nullable);
// console.log(typeof nullable);

// let fromHTML = Number(prompt('Enter a number'));
// console.log(typeof fromHTML);
// if (typeof nullable === 'string') {
// 	console.log('It is string');
// } else if (typeof logic === 'boolean') {
// 	console.log('It is boolean');
// } else {

// }

// let result = (caset > 25) ? 17 : (caset === 20) ? 'true' : 'false';

// console.log(result);


const sum = function(a, b){
  return a + b;
}
const sub = function(a, b){
  return a - b;
}
const div = function(a, b){
  return a / b;
}
const mul = function(a, b){
  return a * b;
}

const calculate = function(num1, num2, mathOperation){
  if(isNaN(num1 - num2)){
    return 'Enter number, please'
  }

let operation;

switch (mathOperation){
  case '+': {
    operation = sum;
    break;
  }
  case '-': {
    operation = sub;
    break;
  }
  case '/': {
    operation = div;
    break;
  }
  case '*': {
    operation = mul;
    break;
  }
  default: {
    console.log('Unknown math operation');
  }
}

if(typeof operation === 'function'){
  return operation(num1, num2);
}else{
  return 'Unknown math operation';
}

}

const userInp1 = Number(prompt('Enter first number'));
const userInp2 = Number(prompt('Enter second number'));
const mathOperation = prompt('Enter math operation');

const result = calculate(userInp1, userInp2, mathOperation);

console.log(result);
