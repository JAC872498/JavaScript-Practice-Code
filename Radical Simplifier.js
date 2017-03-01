/*This takes an inputed radical and returns it's simplest form*/
var preN=prompt("Enter what the radical's being multiplied by.");
var mainN=prompt("Enter the radicand.");
for(var x=mainN-1;x>=0;x--){
  if(Math.sqrt(x)%1==0 && (mainN/(x))%1==0){
    if(Math.sqrt(mainN/x)%1==0){
      console.log(preN+"√"+mainN+" can be simplified to "+(Math.sqrt(x)*preN*Math.sqrt(mainN/x)));
    }else{
      console.log(preN+"√"+mainN+" can be simplified to "+(Math.sqrt(x)*preN)+"√"+mainN/x);
    }
    break;
  }
}
