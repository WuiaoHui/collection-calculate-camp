'use strict';

function grouping_count(collection) {
var result=[];
var count=[];
for(var i=0;i<collection.length;i++)
  for(var j=0;i<collection.length;j++)
  {
     if(result[i]==collection[j])
     {
       count[i]++;
     }
     else
       result[i++]=collection[j];
  }
  return result;
  //在这里写入代码
}

module.exports = grouping_count;
