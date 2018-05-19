'use strict';

function amount_even(collection) {
var result=0;
for(var i=0;i<collection.length;i++)
{
  if(collection[i]%2==0)
  {
    result+=collection[i];
  }
}
return result;
  //在这里写入代码
}

module.exports = amount_even;
