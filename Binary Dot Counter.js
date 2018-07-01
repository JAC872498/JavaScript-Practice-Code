/*I was slightly anoyyed that GDQ's counter was off
So I made my own binary dot counter/timer*/

var canvas=document.getElementById("myCanvas");
var cns=canvas.getContext("2d");
cns.fillStyle="#FF0000";
for(var n=0;n<9;n++){
  cns.fillRect(n*50,0,5,150);
}
