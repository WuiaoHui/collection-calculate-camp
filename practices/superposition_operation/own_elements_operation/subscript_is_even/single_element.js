'use strict';
var single_element = function(collection){
var result=[];
var t=true;
var l=0;
for(var i=0;i<collection.length;i++)
{
  if((i+1)%2==0)
  {
    for(var j=0;j<result.length;j++)
    {
      if(result[j]==collection[i])
      {
        t=false;
        for(var k=j;k<result.length-1;k++)
        {
          result[k]=result[k+1];
        }
      }
    }
    if(t==true)
    {
      result[l++]=collection[i];
    }
  }
}
};
module.exports = single_element;
