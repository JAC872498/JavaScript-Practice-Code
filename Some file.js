/**/

function change(wrd,n){
  var alph=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  for(var i=0;i<alph.length;i++){
    if(wrd===alph[i]){
      var num=i;
      break;
    }
  }
  num+=n;
  while(num>=26){
    num-=26;
  }
  return(alph[num]);
}

function cipher1(wrd,n){
  var newWrd="";
  for(var x=0;x<wrd.split('').length;x++){
    newWrd=newWrd+change(wrd.split('')[x],n);
  }
  return(newWrd);
}

console.log(cipher1("abc",26))
