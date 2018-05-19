'use strict';
var even_asc_odd_desc = function(collection){
var result1=[];
var result2=[];
var result=[];
for(var i=0;i<collection.length;i++)
{
  var j=0;
  var l=0;
  if(collection[i]%2==0)
  {
      result1[j++]=collection[i];
      for(var k=0;k<result1.length-1;k++)
      {
          if(result1[k]>result1[k+1])
          {
            var temp=result1[k];
            result1[k]=result1[k+1];
            result1[k+1]=result1[k];
          }
      }
  }
  if(collection[i]%2!=0)
  {
    result2[l++]=collection[i];
    for(var k=0;k<result2.length-1;k++)
    {
      if(result2[k]>result2[k+1])
      {
        var temp=result2[k];
        result2[k]=result2[k+1];
        result2[k+1]=result2[k];
      }
    }
  }

}
result=result1+result2;
return result;
};
module.exports = even_asc_odd_desc;
