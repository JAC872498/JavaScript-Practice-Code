/*This takes a number or string and returns it reversed.*/
var wrd=123;
if(typeof(wrd)=="string"){
  var arr=wrd.split("");
}else if(typeof(wrd)=="number"){
  var arr= wrd.toString();
}else{
  console.log("ayy");
}
var backArr=[];
for(var x=arr.length-1;x>=0;x--){
  backArr[arr.length-(x+1)]=arr[x];
}
console.log(backArr);
