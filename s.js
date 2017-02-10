var num=120;
var zeros=5;
var newNum=120;
var s=zeros-(num.toString()).length;
for(var x=0;x<s;x++){
  s/=10;
}
console.log(s);
