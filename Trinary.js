/*http://exercism.io/exercises/javascript/trinary/readme*/

var num=102012;
function toBase10(num){
  var power=1;
  var b10Total=0;
  for(var n=1;n<=6;n++){
    b10Total+=(Math.floor((num%Math.pow(10,n))/Math.pow(10,n-1)))*power;
    power*=3;
  }
}
console.log(b10Total);
