/*This just finds the lowest common multiplier of all the numbers in 'array'*/

function LCM(d){
  var low=d[0],num=0,works=true;
  for(var x=0;x<d.length;x++){
    if(d[x]<low){
      low=d[x];
    }
  }
  while(true){
    works=true;
    num+=low;
    for(var x=0;x<d.length;x++){
      if(num%d[x]!=0){
        works=false;
      }
    }
    if(works){
      return num;
    }
  }
}
var array=[5,10,8];
console.log(LCM(array));
