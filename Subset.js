var wrd="dog";
for(var x=0;x<=wrd.length;x++){
  for(var y=x;y<wrd.length;y++){
    console.log(wrd.substring(x,y+1));
  }
}