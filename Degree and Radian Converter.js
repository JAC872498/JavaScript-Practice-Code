 /*This either converts a radian number to a degree or vice versa*/
function GCD(num1, num2){
  var top=0;
  for(var x=1;x<=num1;x++){
    if(num1%x==0 && num2%x==0){
      top=x;
    }
  }
  return [num1/top,num2/top];
}

var choice=prompt("Enter 1 for degree->radian and 2 for radian->degree.");
if(choice==1){//degree->radian
  var num=prompt("Enter the starting degree.");
  console.log(GCD(num,180)[0]+"π/"+GCD(num, 180)[1]);
}else{//radian->degree
  var num=prompt("Enter the starting fraction without pi.");
  var newNum=((num.split("/")[0]*180)+"/"+(num.split("/")[1]));
  console.log(newNum.split("/")[0]/newNum.split("/")[1]+"°");
}
