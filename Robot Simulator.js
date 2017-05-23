/**/

var directions=["west","north","east","south"];
var coords=[0,0];
var currDir=1;
var direction=directions[currDir];
var instructions=prompt("Enter the instructions.").split("");
for(var x=0;x<instructions.length;x++){
  console.log("The robot is at",coors[0],", ",coors[1]," and is facing ",direction);              
  if(R){
    currDir+=1;
    if(currDir==4){
      currDir=0;
    }
    direction=directions[currDur];
  }else if(L){
    currDir-=1;
    if(currDir==-1){
      currDir=3;
    }
    direction=directions[currDur];
  }else if(A){
    if(currDur==0){
      
    }else if(currDur==1){
      
    }else if(currDur==2){
      
    }else if(currDur==3){
      
    }
  }
}
