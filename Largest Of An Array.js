/*This takes an array and returns the largest number of it and it's place in the array*/

var arr=[1,2,3,4,5];
var num=0;
var place=0;
for(var x=1;x<arr.length;x++){
   if(arr[x]>num){
     num=arr[x];
     place=x;
   }
}
console.log("The largest number of the array is at place "+place+" with a value of "+num);
