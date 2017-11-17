/*http://exercism.io/exercises/javascript/trinary/readme*/

var num=102012;
function toBase10(num){
  var power=1;
  var b10Total=0;
  for(var n=1;n<=(num+"").length;n++){
    b10Total+=(Math.floor((num%Math.pow(10,n))/Math.pow(10,n-1)))*power;
    power*=3;
  }
  return(b10Total);
}
function toBase3(num){
  var power=1;
  var total=0;
  for(var n=1;n<=(num+"").length;n++){
    total+=(Math.floor((num%Math.pow(3,n))/Math.pow(3,n-1)))*power;
    power*=10;
  }
  return(total);
}
