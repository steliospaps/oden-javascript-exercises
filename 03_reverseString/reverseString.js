const reverseString = function(str) {
  if(str.length<=1){
    return str;
  }

  return reverseString(str.slice(1,str.length))+str.slice(0,1);

};

// Do not edit below this line
module.exports = reverseString;
