/*This takes a number and returns it in roman numerals
does it work 100%? probably not
could it be optimized and cleaned up? definitely
are there better places to do this? lots of them*/

function getVal(a,b,c){
  for(var x=0;x<=6;x++){
    if(a==b[x]||a===c[x]){
      return x;
    }
  }
}

var num=parseInt(prompt("Enter number."));
var newNum="";
var vals=[1,5,10,50,100,500,1000];
var signs=["I","V","X","L","C","D","M"];
while(num>0){
  if(num==9){
    num-=9;
    newNum+="IX";
  }else if(num==49){
    num-=49;
    newNum+="XLIX";
  }else if(num==99){
    num-=99;
    newNum+="XCIX";
  }else if(num==499){
    num-=499;
    newNum+="CDXCIX";
  }else if(num==999){
    num-=999;
    newNum+="CMXCIX";
  }
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
