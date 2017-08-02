/**/

var number=5;
var newNum=0;
var base=2;
for(var n=0;n<number;n++){
  newNum+=1;
  for(var x=1;x<=(newNum.toString()).length();x++){
    if(newNum%x==base){
      newNum-=(base*(10**x));
      newNum+=(10**(x+1));
    }
  }
}
console.log(newNum);
