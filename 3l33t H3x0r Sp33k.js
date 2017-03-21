function sp33k(wrd){
  var newWrd="";
  var arr=wrd.split("");
  for(var x=0;x<wrd.length;x++){
    if(arr[x].toUpperCase()=="A"){
      newWrd+="3";
    }else if(arr[x].toUpperCase()=="E"){
      newWrd+="3";
    }else if(arr[x].toUpperCase()=="I"){
      newWrd+="1";
    }else if(arr[x].toUpperCase()=="L"){
      newWrd+="1";
    }else if(arr[x].toUpperCase()=="O"){
      newWrd+="0";
    }else{
      newWrd+=arr[x];
    }
  }
  return newWrd;
}

var wrd="abcdefghigjlmnopqrstuvwxyz";
console.log(sp33k(wrd));
