'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  var result=[];
  for(var i=0;i<collection.length-1;i++)
  {
    for(var j=i+1;j<collection.length;j++)
    {
      if(collection[i]>collection[j])
      {
        var temp=collection[j];
        collection[j]=collection[i];
        collection[i]=collection[j];
      }
    }
  }
  for(var i=0;i<collection.length;i+=3)
  {
    var temp=collection[i];
    result[i]=collection[i+1];
    result[i+1]=collection[i+1];
    result[i+2]=temp;
  }
  return result;
}
module.exports = rank_by_two_large_one_small;
