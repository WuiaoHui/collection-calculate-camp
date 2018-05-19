'use strict';

function compare_collections(collection_a, collection_b) {
  var result=false;
  for(var i=0;i<collection_a.length;i++)
    for(var j=0;j<collection_b.length;j++)
      if(collection_a[i]==collection_b[j])
        result=true;
      else
        result=false;
  return result;//在这里写入代码
}

module.exports = compare_collections;


