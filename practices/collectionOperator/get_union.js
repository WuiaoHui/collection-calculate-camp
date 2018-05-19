'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var result=[];
  result.push(collection_a);
  for(var i=0,j=0;j<collection_b.length;j++)
  {
   if(collection_b[j]!=result[i]&&i<result.length)
   {i++;}
   else if(i<result.length)
   {
     result.push(collection_b[j]);
   }
  }
  return result;
}

module.exports = get_union;

