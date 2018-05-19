'use strict';

function compute_median(collection) {
  //在这里写入代码
  var result=[];
  result[0]=collection[0];
  for(var i=1;i<collection.length;i++)
  {
    for(var j=0;j<result.length;j++)
    if(collection[i]<result[j])
    {
      var temp=result[j];
      for(var k=j;k<=result.length;k++)
      {
        result[j]=collection[i];
      }
    }
  }
  if(collection.length%2==0)
  {
    return(collection[length/2]+collection[length/2+1])/2;
  }else {
    return collection[(length+1 )/2]/2;
  }
  }

module.exports = compute_median;


