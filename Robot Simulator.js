/**/

var directions=["west","north","east","south"];
var coords=[0,0];
var currDir=1;
var direction=directions[currDir];
var instructions=prompt("Enter the instructions.").split("");
for(var x=0;x<instructions.length;x++){
  console.log("The robot is at "+coords[0]+", "+coords[1]+" and is facing "+direction);              
  if(instructions[x]=="R"){
    currDir+=1;
    if(currDir==4){
      currDir=0;
    }
    direction=directions[currDir];
  }else if(instructions[x]=="L"){
    currDir-=1;
    if(currDir==-1){
      currDir=3;
    }
    direction=directions[currDir];
  }else if(instructions[x]=="A"){
    if(currDir==0){
      
    }else if(currDir==1){
      
    }else if(currDir==2){
      
    }else if(currDir==3){
      
    }
  }
}
