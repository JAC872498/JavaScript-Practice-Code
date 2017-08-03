/**/

var num=252;
var newNum=1;
var base=2;
var baseNums=[1];
var used=2;
var tot=0;
while(baseNums[baseNums.length-1]<num/base){
  baseNums.push(baseNums[baseNums.length-1]*base);
  newNum*=10;
}
num-=baseNums[baseNums.length-1];
for(var n=baseNums.length-1;n>=0;n--){
  if(num>tot+baseNums[n]&&used<base){
    newNum+=(10**n);
    used++;
    tot+=baseNums[n];
  }else if{
    newNum*=10;
    used=1;
  }
}
console.log(newNum);
