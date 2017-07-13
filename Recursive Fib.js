/**/

function fib(n,nums=[0,1]){
  if(n<=2) return(nums);
  nums.push(nums[nums.length-1]+nums[nums.length-2]);
  return(fib(n-1,nums));
}
console.log(fib(1));
