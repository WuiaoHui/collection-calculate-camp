'use strict';

function choose_no_repeat_number(collection) {
  var result=[];
  var j=0;
  result[0]=collection[0];
  for(var i=1;i<collection.length;i++)
  {
    for(var k=0;k<result.length;k++)
      {
        if (collection[i] == result[k])
           break;
        if(k==(result.length-1))
           result[j++]=collection[i];
       }
    }
    return result;
  //在这里写入代码
}

module.exports = choose_no_repeat_number;
