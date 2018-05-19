'use strict';
var calculate_median = function(collection){
var result;
if(collection.length%2!=0)
  {
    result=collection[collection.length/2+1];
  }
else
  {
    result=collection[collection.length/2];
  }
return result;
};
module.exports = calculate_median;
