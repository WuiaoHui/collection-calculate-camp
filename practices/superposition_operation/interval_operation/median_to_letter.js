'use strict';

function median_to_letter(collection) {
var ave;
    if(collection.length%2==0)
    {
      ave=parseInt((collection[collection.length/2]+collection[collection.length/2+1])/2);
    }
    else
    {
      ave=collection[parseInt(collection.length/2)+1];
    }
  var alphabet= String.fromCharCode(64 + parseInt(ave));
  return alphabet;
}

module.exports = median_to_letter;
