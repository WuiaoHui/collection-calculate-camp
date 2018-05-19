'use strict';

function double_to_one(collection) {
var result=[];
var k=0;
for(var i=0;i<collection.length;i++)
  for(var j=0;j<collection[i].length;j++)
  {
    for(var t=0;t<k;t++)
    {
      if(collection[i][j]==result[k])
        break;
    }
    if(t>=k)
    {
      result[k++]=collection[i][j];
    }

  }
  return result;//在这里写入代码
}

module.exports = double_to_one;
