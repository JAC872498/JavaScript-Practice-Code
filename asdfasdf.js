/**/

var num=123;
var newNum=0;
var base=2;
var baseNums=[1];
var used=0;
while(baseNums[baseNums.length-1]<num/base){
  baseNums.push(baseNums[baseNums.length-1]*base);
}
console.log(baseNums);
for(var n=baseNums.length-1;n>=0;n--){
  if(num>baseNums[n]&&used<base)){
    newNum+=(10**n);
    used++;
  }
  used=0;
}
