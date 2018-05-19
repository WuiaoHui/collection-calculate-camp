'use strict';

function average_to_letter(collection) {
var sum=0,ave;
for(var j=0;j<collection.length;j++)
{
  sum+=collection[j];
}
  ave=parseInt(sum/collection.length);
var result ='a'+ave-1;
  return result;
}

module.exports = average_to_letter;

