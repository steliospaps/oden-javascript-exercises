const add = function(a,b) {
  return a+b;
	
};

const subtract = function(a,b) {
  return a-b;
	
};

const sum = function(arr) {
  return arr.reduce(add,0);
	
};

const multiply = function(arr) {
  return arr.reduce((a,b)=>a*b,1.0);

};

const power = function(num,exp) {
  return Math.pow(num,exp)
	
};

const factorial = function(x) {
	if(x<=0){
    return 1;
  }
  return x*factorial(x-1);
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
