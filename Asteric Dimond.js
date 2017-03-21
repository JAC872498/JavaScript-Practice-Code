var wrd="";
var num=prompt("Enter number.");
for(var x=0;x<num;x++){
  for(var y=x;y<=5;y++){
    wrd+=" ";
  }
  for(var y=1;y<=(x*2)-1;y++){
    wrd+="*";
  }
  wrd+="\n";
}
for(var x=num;x>0;x--){
  for(var y=x;y<=5;y++){
    wrd+=" ";
  }
  for(var y=1;y<=(x*2)-1;y++){
    wrd+="*";
  }
  wrd+="\n";
}
console.log(wrd);
