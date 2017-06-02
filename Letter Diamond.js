/*Basicly the diamond shape thingy, but with letters instead of asterisks
ex: 3 would be the following
··A··
·B·B·
C···C
·B·B·
··A··*/

var alph=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var num=prompt("Enter number."), wrd="";
for(var x=0;x<num;x++){
  for(var y=1;y<num-x;y++){
    wrd+="*";
  }
  for(var y=0;y<((x+1)*2)-1;y++){
    if(y===0||y==((x+1)*2)-2){
      wrd+=alph[x];
    }else{
      wrd+="*";
    }
  }
  for(var y=1;y<num-x;y++){
    wrd+="*";
  }
  console.log(wrd);
  wrd="";
}
for(var x=num-2;x>=0;x--){
  for(var y=1;y<num-x;y++){
    wrd+="*";
  }
  for(var y=0;y<((x+1)*2)-1;y++){
    if(y===0||y==((x+1)*2)-2){
      wrd+=alph[x];
    }else{
      wrd+="*";
    }
  }
  for(var y=1;y<num-x;y++){
    wrd+="*";
  }
  console.log(wrd);
  wrd="";
}
