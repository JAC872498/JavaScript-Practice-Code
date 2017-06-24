/**/

function getVal(a){
  if(a==1){
    return 1;
  }else if(a==5){
    
  }else if(a==10){
    
  }else if(a==50){
    
  }else if(a==100){
    
  }else if(a==500){
    
  }else if(a==1000){
    
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
    console.log("Too long");
  }
}
console.log(newNum);
