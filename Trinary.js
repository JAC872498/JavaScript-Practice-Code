/*http://exercism.io/exercises/javascript/trinary/readme*/

var num=12345;
var power=1;
for(var n=2;n<=6;n++){
  console.log(Math.ceil((num%Math.pow(10,n))/Math.pow(10,n-1)));
}
