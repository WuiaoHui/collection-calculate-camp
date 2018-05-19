'use strict';

function compute_chain_median(collection) {
  var result;
  var avenum;
  if(collection.length%2==0)
  {
    avenum=collection.length/2;
    result=(collection[avenum]+collection[avenum-1])/2;
  }
  else
  {
    avenum=(collection.length-1)/2;
    result=collection[avenum];
  }
  return result;

  //在这里写入代码
}

module.exports = compute_chain_median;
