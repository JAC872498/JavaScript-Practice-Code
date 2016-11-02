"""This returns true if the input word is a palindrome ex: tacocat, bob, non"""

function palindrome(wrd){
  var arr=wrd.split("");
  if(wrd.length%2==0){
    var num=wrd.length/2;
  }else{
    var num=(wrd.length+1)/2;
  }
  for(var x=0;x<=num;x++){
    if(arr[x]!=arr[wrd.length-(1+x)]){
      return false;
    }
  }
  return true;
}

console.log(palindrome("word"));//Prints false
console.log(palindrome("bob"));//Prints true
