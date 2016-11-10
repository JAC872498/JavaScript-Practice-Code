"""This takes a sentance from the user and returns the largest word and how long it is."""

var wrd=prompt("Enter your sentance.");
var arr=wrd.split(" ");
var largeWrd="";
for(var x=0;x<arr.length;x++){
  if(arr[x].length>=largeWrd.length){
    largeWrd=arr[x];
  }
}
console.log(largeWrd+" is the largest word at "+largeWrd.length+" character(s) long.");
