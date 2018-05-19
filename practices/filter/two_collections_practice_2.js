'use strict';

function choose_no_common_elements(collection_a, collection_b) {
var result=[];
var Judge=0;
for(var i=0,k=0;i<collection_b.length;i++)
{
  for(var j=0;j<collection_a.length;j++)
  {
    if(collection_a[i]==collection_b[j])
    {
      Judge=1;
      break;
    }
  }
  if(Judge==0)
    {
      result[k++]=collection_a[i];
    }
  }
return result;
  //在这里写入代码
}

module.exports = choose_no_common_elements;
