/*https://www.geeksforgeeks.org/sum-digit-number-using-recursion/
This is basicaly just three recursive methods that I threw together for fun*/

function digitSum(n){
  if(n.toString().length<=1) return(n);
  return(n%10+digitSum(Math.floor(n/10)));
}

function totalPower(n){
  if(n===0) return(0);
  return(totalPower(n-1)+power(n));
}

function power(n){
  if(n===0) return(0);
  if(n==1) return(1);
  return(n*power(n-1));
}
console.log(totalPower(digitSum(123450)));
