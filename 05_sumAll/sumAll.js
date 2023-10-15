const sumAll = function(start,stop) {
  if(typeof(start)!="number" || typeof(stop)!="number"){
    return 'ERROR';
  }
  if(start<0 || stop<0){
    return 'ERROR';
  }
  let res=0;
  for(i=Math.min(start,stop);i<=Math.max(start,stop);i++){
    res=res+i;
  }
  return res;

};

// Do not edit below this line
module.exports = sumAll;
