/**/

function getVal(letter,alph){
  for(var i=0;i<alph.length;i++){
    if(letter.toLowerCase()===alph[i]){
      return i;
    }
  }
}

function cipher(wrd,n,key){
  var alph=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var newWrd="";
  var num=0;
  for(var x=0;x<wrd.split('').length;x++){
    num=getVal(wrd.split('')[x],alph);
    num+=n+getVal(key.split('')[x],alph);
    while(num>=26){
      num-=26;
    }
    newWrd=newWrd+alph[num];
  }
  return(newWrd);
}

console.log(cipher("abc",0,"abc"));
