/*This takes a number and finds all prime numbers up-to and including the number*/

function isPrime(num){
  for(var x=2;x<num;x++){
    if(num%x==0){
      return(false);
    }
  }
  return(true);
}

function findingPrime(num){
   for(var x=2;x<=num;x++){
     if(isPrime(x)){
       console.log(x);
     }
   }
 }
findingPrime(23);
