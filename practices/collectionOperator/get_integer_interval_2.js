'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var result;
  var i=0;
  if(number_a==number_b)
    {
      if(number_a%2==0)
      {
         result[i]=number_a;
      }
      else
      {
         result[i]=number_a-1;
      }
    }
  else if(number_a<number_b) {
    while (number_a <= number_b) {
      if (number_a % 2 == 0) {
        resut[i++] = number_a;
        number_a += 2;
      }
      else {
        result[i++] = number_a + 1;
        number_a += 2;
      }

    }
  }
  else
  {
    while (number_a>=number_b)
     {
      if(number_a%2==0)
       {
        result[i++]=number_a;
        number_a-=1;
        }
      else {
          result[i++]=number_a--;
          number_a-=1;
        }
    }
  }
}

module.exports = get_integer_interval_2;
