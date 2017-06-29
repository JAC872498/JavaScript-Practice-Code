/*This is a simple cipher that encrypts or decrypts a string based on a given number and string.
http://exercism.io/exercises/javascript/simple-cipher/readme is a better explination of it*/

function getVal(letter,alph){
  for(var i=0;i<alph.length;i++){
    try{
      if(letter.toLowerCase()===letter.toUpperCase()) return -1;
    }catch(e){
      return -1;
    }
    if(letter.toLowerCase()===alph[i]){
      return i;
    }
  }
}

function encrypt(wrd,n,key){
  var alph=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var newWrd="";
  var num=0;
  for(var x=0;x<wrd.split('').length;x++){
    num=getVal(wrd.split('')[x],alph);
    if(num==-1){
      newWrd=newWrd+wrd.split('')[x];
      num=0;
    }else{
      num+=n+getVal(key.split('')[x],alph);
      while(num>=26){
        num-=26;
      }
      newWrd=newWrd+alph[num];
    }
  }
  return(newWrd);
}
function decrypt(wrd,n,key){
  var alph=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var newWrd="";
  var num=0;
  for(var x=0;x<wrd.split('').length;x++){
    num=getVal(wrd.split('')[x],alph);
    if(num==-1){
      newWrd=newWrd+wrd.split('')[x];
      num=0;
    }else{
      num-=n+getVal(key.split('')[x],alph);
      while(num<0){
        num+=26;
      }
      newWrd=newWrd+alph[num];
    }
  }
  return(newWrd);
}

console.log(encrypt("Rush Berlin on the fifth of July.",12345,"nab"));
console.log(decrypt("zpob vylfch ih nby zcznb iz dofs.",12345,"nab"));
