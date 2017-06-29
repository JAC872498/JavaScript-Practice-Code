/*This is a simple cipher that encrypts or decrypts a string based on a given number and string.
http://exercism.io/exercises/javascript/simple-cipher/readme is a better explination of it*/

function getVal(letter,alph){
  for(var i=0;i<alph.length;i++){
    if(letter.toLowerCase()===alph[i]){
      return i;
    }
  }
}

function encrypt(wrd,n,key){
  var alph=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','0',' ','_','-','!','?','.',','];
  var newWrd="";
  var num=0;
  while(key.length<wrd.length){
    key+=key;
  }
  for(var x=0;x<wrd.split('').length;x++){
    num=getVal(wrd.split('')[x],alph);
    if(num==-1){
      newWrd=newWrd+wrd.split('')[x];
      num=0;
    }else{
      num+=n+getVal(key.split('')[x],alph);
      while(num>=43){
        num-=43;
      }
      newWrd=newWrd+alph[num];
    }
  }
  return(newWrd);
}
function decrypt(wrd,n,key){
  var alph=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','0',' ','_','-','!','?','.',','];
  var newWrd="";
  var num=0;
  while(key.length<wrd.length){
    key+=key;
  }
  for(var x=0;x<wrd.split('').length;x++){
    num=getVal(wrd.split('')[x],alph);
    if(num==-1){
      newWrd=newWrd+wrd.split('')[x];
      num=0;
    }else{
      num-=n+getVal(key.split('')[x],alph);
      while(num<0){
        num+=43;
      }
      newWrd=newWrd+alph[num];
    }
  }
  return(newWrd);
}

console.log(encrypt("abcde 12345",806,"!?.,-_"));
console.log(decrypt("35796vnprtq",806,"!?.,-_"));
