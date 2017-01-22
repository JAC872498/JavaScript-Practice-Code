var wrd="";
for(var x=0;x<5;x++){
  for(var y=0;y<=x;y++){
    wrd+="*";
  }
  wrd+="\n";
}
for(var x=5;x>0;x--){
  for(var y=0;y<=x;y++){
    wrd+="*";
  }
  wrd+="\n";
}
console.log(wrd);
