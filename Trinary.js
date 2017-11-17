/*http://exercism.io/exercises/javascript/trinary/readme*/

var num=102012;
function toBase10(num,base){
  var power=1;
  var b10Total=0;
  for(var n=1;n<=(num+"").length;n++){
    b10Total+=(Math.floor((num%Math.pow(10,n))/Math.pow(10,n-1)))*power;
    power*=base;
  }
  return(b10Total);
}
console.log(toBase10(num,3));
