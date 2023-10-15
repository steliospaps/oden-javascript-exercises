const repeatString = function(str, repeatCount) {
  if(repeatCount<0){
    return 'ERROR';
  }
  let result='';
  for(i=0;i<repeatCount;i++){
    result=result+str;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
