 /**/
var preN=prompt("");
var mainN=prompt("");
for(var x=mainN-1;x>=0;x--){
  if(Math.sqrt(x)%1==0 && (mainN/(x))%1==0){
    console.log(x+0);
    console.log(mainN/(x));
    console.log(Math.sqrt(x)+"root"+mainN/(x));
    break;
  }
}
