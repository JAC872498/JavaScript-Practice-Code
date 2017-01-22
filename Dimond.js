var wrd="";
for(var x=0;x<5;x++){
  for(var y=x;y<=5;y++){
    wrd+=" ";
  }
  for(var y=1;y<=x*2;y++){
    wrd+="*";
  }
  wrd+="\n";
}
for(var x=5;x>0;x--){
  for(var y=x;y<=5;y++){
    wrd+=" ";
  }
  for(var y=1;y<=x*2;y++){
    wrd+="*";
  }
  wrd+="\n";
}
console.log(wrd);
