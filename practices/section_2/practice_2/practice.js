function count_same_elements(collection) {
  //在这里写入代码
  var result=[];
  result[0]=collection[0];
  var i=0;
  for(var i=0;i<collection.length;i++)
  {
    if (collection[j] == result[i]&&collection[j].length==1)
    {
      result[i].count++;
    }
    else if(collection[j].length>1)
    {
      result[++i].key=collection[j][0];
      result[i].count=collection[j].pp();
      t=false;
    }
    if(collection[j] != result[i]&&t==true)
    {
      result[++i].key = collection[j];
      result[i].count++;
      t=false;
      break;
    }
    result[i].key=collection[i];
  }
  return result;
}

module.exports = count_same_elements;
