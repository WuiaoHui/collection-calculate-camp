'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var result=[];
  var k;
  if(number_a<number_b)
  {
    for(var i=0,k=number_a;k<=number_b;i++)
    result[i++]=k.toString();
    k++;
  }
  else if(number_a>number_b)
  {
    for(var i=0,k=number_a;k>=number_b;i++)
      result[i++]=k.toString();
      k--;
  }
  else
  {
    result[0]=number_a.toString();
  }
  return result;
}

module.exports = get_letter_interval_2;

