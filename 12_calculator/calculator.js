const add = function(num1,num2) {
	return num1 + num2;

};

const subtract = function(num1,num2) {
  return num1 - num2;
	
};

const sum = function(arr) {
  let total = 0;
  for (i = 0; i < arr.length ;i++){
    total += arr[i]
  }
	return total
};

const multiply = function(arr) {
  let total = 1 
  for (i=0; i< arr.length;i++){
    total *= arr[i];
  }
return total;
};

const power = function(base, exponent) {
  return Math.pow(base,exponent);
	
};

const factorial = function(n) {
  if (n < 0) return undefined
  let result = 1
  for (let i = 2; i <= n; i++){
    result *= i;
    
  }
	return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
