/*I was slightly anoyyed that GDQ's counter was off
So I made my own binary dot counter/timer*/

var canvas=document.getElementById("myCanvas");
var cns=canvas.getContext("2d");
cns.fillStyle="#000000";
for(var n=0;n<9;n++){
  cns.fillRect(n*50,0,5,150);
}
for(var n=0;n<9;n++){
	cns.fillRect(0,n*25,355,5);
}
