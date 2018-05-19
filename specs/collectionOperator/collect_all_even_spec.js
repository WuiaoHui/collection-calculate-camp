'use strict';

function collect_all_even(collection_a) {
  var i=0;
  var result=[];
  for(var j=0;i<collection_a.length;i++)
  {
    if( collection_a[i]%2==0)
      result[j]=collection_a[i];
  }
  return result;
}
