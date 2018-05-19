function create_updated_collection(collection_a,object_b) {
  //在这里写入代码
  var result=[];
  var j=0;
  for(var i=0;i<collection_a.length;i++)
    if(collection_a.key==object_b[j])
    {
      result[j].key=object_b.value[j];
      result.count=collection_a[j].count-1;
    }
    return result;
}

module.exports = create_updated_collection;
