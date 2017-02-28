 /*This either converts a radian number to a degree or vice versa*/
function GCD(num1){
  var top=0;
  for(var x=1;x<=num1;x++){
    if(num1%x==0 && 180%x==0){
      top=x;
    }
  }
  return [num1/top,num2/top];
}

var choice=prompt("Enter 1 for degree->radian and 2 for radian->degree.");
var num=prompt("Enter the starting number.");
if(choice==1){//degree->radian
  console.log(GCD(num)[0],"pi");
}else{//radian->degree
  console.log("MAYMAY");
}
