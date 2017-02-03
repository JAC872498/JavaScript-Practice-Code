/*This finds either the highest and the lowest number in an array and where it's located*/
var arr=[2,4,8];
low=arr[0],lowLoc=1;
high=arr[0],highLoc=1;
for(var x=0;x<arr.length;x++){
  if(arr[x]>high){
    high=arr[x];
    highLoc=x+1;
  }else if(arr[x]<low){
    low=arr[x];
    lowLoc=x+1;
  }
}

console.log("The highest of the array is number "+highLoc+" of the array with a value of "+high+"\n");
console.log("The lowest of the array is number "+lowLoc+" of the array with a value of "+low);
