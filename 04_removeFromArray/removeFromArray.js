const removeFromArray = function(arr, ...itemsToRemove) {
  let result=[];
  for(i=0;i<arr.length;i++){
    const curr=arr.at(i);
    if(!itemsToRemove.includes(curr)){
      result.push(curr);
    }
  }
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
