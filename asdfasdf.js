/**/

var number=123;
var newNum=0;
var base=2;
for(var n=0;n<number;n++){
  newNum+=1;
  for(var x=1;x<=(test1.toString()).length;x++){
  //console.log(Math.floor((test1%(10**x)/(10**(x-1)))));
    if(Math.floor((test1%(10**x)/(10**(x-1))))>=base){
    //console.log(Math.floor((test1%(10**x)/(10**(x-1)))));
      test1-=(10**(x-1)*base);
      test1+=(10**x);
    }
  }
}
console.log(newNum);
