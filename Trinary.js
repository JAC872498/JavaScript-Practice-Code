/*http://exercism.io/exercises/javascript/trinary/readme*/

var num=12345;
var power=1;
for(var n=1;n<6;n++){
  console.log(Math.floor((num%Math.pow(10,n))/Math.pow(10,n-1)));
  console.log(power);
  power*=3;
}
