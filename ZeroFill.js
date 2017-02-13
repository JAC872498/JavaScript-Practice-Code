//This takes 'num' and turns it into a deciman 'zeros' long

function zeroFill(num, zeros){
  var newNum=num;
  var s=zeros-(num.toString()).length;
  for(var x=0;x<(num.toString()).length+s;x++){
    newNum/=10;
  }
  return(newNum);
}
console.log(zeroFill(#,#));
