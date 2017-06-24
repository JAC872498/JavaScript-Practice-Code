/**/

var num=parseInt(prompt("Enter number."));
var newNum="";
var vals=[1,5,10,50,100,500,1000];
var signs=["I","V","X","L","C","D","M"];
var used=0;
while(num>0){
  for(var x=6;x>=0;x--){
    //console.log(signs[x],vals[x]);
    if(vals[x]<=num&&used<3){
      newNum+=signs[x];
      num-=vals[x];
    }else if(vals[x]<=num){
      
    }
  }
}
console.log(newNum);
