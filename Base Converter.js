/*This takes a base 10 number and converts it into a given base*/

var num=252;//Base 10 number you want to convert
var base=2;//Base you want the result to be in
var newNum=1;
var baseNums=[1];
var used=2;
var tot=0;
while(baseNums[baseNums.length-1]<num/base){
  baseNums.push(baseNums[baseNums.length-1]*base);
  newNum*=10;
}
num-=baseNums[baseNums.length-1];
for(var n=baseNums.length-1;n>=0;n--){
  while(num>=tot+baseNums[n]&&used<base){
    newNum+=(10**n);
    used++;
    tot+=baseNums[n];
  }
  used=1;
}
console.log(newNum);
