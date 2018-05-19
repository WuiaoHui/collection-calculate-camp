'use strict';
var calculate_average = function(collection){
var result=[];
var ave=0;
for(var i=0,j=0;i<collection.length;i++)
  {
      if(collection[i]%2==0)
      {
        result[j++]=collection[i];
      }
  }
for(var i=0;i<result.length;i++)
  {
    ave+=result[i];
  }
return ave=ave/result.length;
};
module.exports = calculate_average;
