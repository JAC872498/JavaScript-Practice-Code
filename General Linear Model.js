//This takes two numbers(n&r) and returns n!/(r!(n-r)!)
//I don't know why I called this GLM, I just looked up the formula and this is the first thing that popped up.

function power(num){
  var tot=1;
  for(var x=1;x<=num;x++){
    tot=tot*x
  }
  return tot;
}

var n=5;
var r=3;
console.log(power(n)/(power(r)*power(n-r)));
