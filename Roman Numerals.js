/**/

var num=parseInt(prompt("Enter number."));
var newNum="";
var vals=[1,5,10,50,100,500,1000];
var signs=["I","V","X","L","C","D","M"];
while(num>0){
  for(var x=6;x>=0;x--){
    console.log(signs[x],vals[x]);
  }
}
