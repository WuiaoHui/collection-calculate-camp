function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var result=[];
  result[0].key=collection_a[0];
  var result2=[];
  var i=0;
  for(var j=0;j<collection_a.length;j++)
  {
      if(result[i].key==collection_a[j])
      {
        result[i].count++;
      }
      else
      {
        result[++i].key=collection_a[j];
        result[i].count++;
      }
  }
  for(var j=0,k=0;j<result.length;j++)
  {
    if(result[j].key==object_b[k].value)
    {
      result2[t].key=result[j].key;
      result2[t].count=result[j].count;
    }
  }
  for(var j=0;j<result2.length;j++)
  {
    if(result2[j].length>=3)
      result2[j].count-=3;
  }
  return result2;
}

module.exports = create_updated_collection;
