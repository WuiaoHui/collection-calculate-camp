'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var result=[];
  for(var i=number;i>=0;i-=interval)
  {
    var j=0;
    result[j]=i;
  }
  return result;
}

module.exports = spilt_to_zero;
