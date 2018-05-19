'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var result=[];
  var v="a";
  var k=0;
  if(number_a<number_b)
       for(var i=number_a;i<=number_b;i++)
      {
       result[k++] = v + (i - 1);
       }
      else if(number_a>number_b)
      for(var i=number_a;i>=number_b;i--)
       {
        result[k++]=v+(i-1);
       }
       else if(number_b==number_a)
       {
         result[k] = v + number_b - 1;
       }
       return result;

}

module.exports = get_letter_interval;
