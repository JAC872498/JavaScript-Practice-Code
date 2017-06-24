/**/

function getVal(a){
  if(a==1||a==="I"){
    return 0;
  }else if(a==5||a==="V"){
    return 1;
  }else if(a==10||a==="X"){
    return 2;
  }else if(a==50||a==="L"){
    return 3;
  }else if(a==100||a=="C"){
    return 4;
  }else if(a==500||a==="D"){
    return 5;
  }else if(a==1000||a==="M"){
    return 6;
  }
}

var num=parseInt(prompt("Enter number."));
var newNum="";
var vals=[1,5,10,50,100,500,1000];
var signs=["I","V","X","L","C","D","M"];
while(num>0){
  for(var x=6;x>=0;x--){
    //console.log(signs[x],vals[x]);
    if(vals[x]<=num){
      newNum+=signs[x];
      num-=vals[x];
    }
  }
  if(newNum.length>=4&&newNum.substring(newNum.length-1,newNum.length)===newNum.substring(newNum.length-2,newNum.length-1)&&newNum.substring(newNum.length-2,newNum.length)===newNum.substring(newNum.length-4,newNum.length-2)){
    //console.log("Too long");
    n=getVal(newNum.substring(newNum.length-1,newNum.length));
    newNum=newNum.substring(0,newNum.length-4);
    newNum+=signs[n]+signs[n+1];
  }
}
console.log(newNum);
