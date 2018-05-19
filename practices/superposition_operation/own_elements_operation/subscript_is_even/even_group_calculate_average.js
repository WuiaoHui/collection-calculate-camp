'use strict';
var even_group_calculate_average = function(collection){
var result=[];
var result1=[];
var result2=[];
var result3=[];
var t=0;
var re=0;
for(var i=0,j=0;i<collection.length;i++)
{
    if(i%2==0)
    {
      result[j++]=collection[i];
    }
}
if(result<=0)
  {
    return 0;
  }
else
{
  for(var i=0,j=0,k=0,l=0;i<result.length;i++)
  {
      if(result[i].toString().length==1)
      {
        result1[j++]=result[i];
        t++;
      }
      else if(result[i].toString().length==2)
      {
        result2[k++]=result[i];
        t++;
      }
      else if(result[i].toString().length==3)
      {
        result3[l++]=result[i];
        t++;
      }
  }
  if(t==1)
  {
      for(var i=0;i<result1.length;i++)
      {
        re+=result1[i];
      }
      return re/result1.length;
  }
  else
  {
      var ave=[];
      var j=0;
      for(var i=0;result1.length>0&&i<result1.length;i++)
      {
        ave[j] +=result1[i];
        ave[j] =ave[j] /result1.length;
        if(i>=result1.length)
        {
          j++;
        }
      }
      for(var i=0;result2.length>0&&i<result2.length;i++)
      {
          ave[j]  +=result1[i];
          ave[j] =ave[j] /result2.length;
          if(i>=result1.length)
          {
            j++;
          }
      }
      for(var i=0;result3.length>0&&i<result3.length;i++)
      {
          ave[j] +=result3[i];
          ave[j]=ave[j]/result3.length;
          if(i>=result1.length)
          {
            j++;
          }
      }

  }
}
  return ave;
};
module.exports = even_group_calculate_average;
