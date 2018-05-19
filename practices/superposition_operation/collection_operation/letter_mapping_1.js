'use strict';

function even_to_letter(collection) {
var result=[];
for(var i=0,j=0;i<collection.length;i++)
{
    if(collection[i]%2==0)
      {
        result[j++]='a'+(i-1);
      }
}
return result;
}

module.exports = even_to_letter;
