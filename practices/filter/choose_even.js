'use strict';

function choose_even(collection) {
  var result=[];
  var j=0;
for(var i=0;i<collection.length;i++)
  if(collection[i]%2==0)
  {
    result[j++]=collection[i];
  }
  return result;//在这里写入代码
}

module.exports = choose_even;
