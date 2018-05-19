function count_same_elements(collection) {
  //在这里写入代码
  var result=[];
  result[0]=collection[0];
  var i=0;
  for(var i=0;i<collection.length;i++)
  {
          if (collection[j] == result[i])
          {
            result[i].count++;
          }
          else
            {
            result[++i] = collection[j];
            t=false;
            break;
          }
      result[i].key=collection[i];
  }
  return result;
}

module.exports = count_same_elements;
