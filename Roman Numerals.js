/**/

var num=parseInt(prompt("Enter number."));
var newNum="";
var vals=[1,5,10,50,100,500,1000];
var signs=["I","V","X","L","C","D","M"];
var used=0;
while(num>0){
  for(var x=6;x>=0;x--){
    //console.log(signs[x],vals[x]);
    if(vals[x]<=num&&used<2){
      newNum+=signs[x];
      num-=vals[x];
      if(signs[x]===newNum.split("")[newNum.length-2]){
        used++;
        //console.log(used);
      }else{
        used=0;
      }//console.log(newNum);
    }else if(vals[x]<=num){
      used=0;
      num+=(vals[x]*3);
      newNum=newNum.substring(0,newNum.lenth-3);
      newNum+=signs[x+1]+signs[x];
      num-=(vals[x+1]-vals[x]);
    }
  }
}
console.log(newNum);
