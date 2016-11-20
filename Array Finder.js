/*This finds either the highest and the lowest number in an array and where it's located*/
var arr=[2,4,8],low=arr[0],high=arr[0];
for(var x=0;x<arr.length;x++){
  console.log(arr[x]);
  if(arr[x]>high){
    high=arr[x];
  }else if(arr[x]<low){
    low=arr[x];
  }
}
