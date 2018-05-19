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
    else if(collection[j].length>1&&collection[j][0]==result[i])
    {
        var array=collection[j];
        var num  = 0;
        for(var k=0;k<array.length;k++)
          {
            var obj = array[k];
            if ($.type(obj) == 'number')
              {//$.type 是jquery的函数，用来判断对象类型
                num = obj;
              }
          }
          result[i].count+=num;
        t=false;
    }
    if(collection[j] != result[i]&&t==true)
    {
        result[++i].key = collection[j];
        var array=collection[j];
        var num  = 0;
        for(var k=0;k<array.length;k++)
        {
          var obj = array[k];
          if ($.type(obj) == 'number')
          {//$.type 是jquery的函数，用来判断对象类型
            num = obj;
          }
        }
        result[i].count=num;
        t=false;
        break;
    }
    result[i].key=collection[i];
  }
  return result;
}

module.exports = count_same_elements;
