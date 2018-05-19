'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var result=[];
  var k=0;
  for(var j=0;j<collection_b.length;j++)
    for(var i=0;i<collection_a.length;i++)
    if(collection_a[i]==collection_b[j]){
      result[k]=collection_b[j];
    }
    return result;
}

module.exports = get_intersection;
