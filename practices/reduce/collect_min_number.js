'use strict';

function collect_min_number(collection) {
  var result=collection[0];
  for(var i=0;i<collection.length;i++)
    if(result>collection[i])
    {
      result=collection[i];
    }
    return result;

  //在这里写入代码
}

module.exports = collect_min_number;

