'use strict';

function choose_common_elements(collection_a, collection_b) {
var result=[];
var k=0;
for(var i=0;i<collection_b;i++)
  for(var j=0;j<collection_a;j++)
    if(collection_a[i]==collection_b[j])
    {
      result[k++]=collection_a[i];
      break;
    }
return result;
  //在这里写入代码
}

module.exports = choose_common_elements;
