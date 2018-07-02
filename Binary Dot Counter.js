/*I was slightly anoyyed that GDQ's counter was off
So I made my own binary dot counter/timer
This does require a HTML5 Canvas*/

var count=0;
var canvas=document.getElementById("myCanvas");
var cns=canvas.getContext("2d");
cns.fillStyle="#000000";
for(var n=0;n<9;n++){
  cns.fillRect(n*50,0,5,150);
}
for(var n=0;n<9;n++){
	cns.fillRect(0,n*25,405,5);
}
for(var n=0;n<2**9;n++){
	count+=1;
    
}
for(var n=0;n<48;n++){
	cns.fillStyle="#"+((1<<24)*Math.random()|0).toString(16);#Gives random color
	#cns.fillRect((Math.floor(n/6)*50)+5 , ((n%8)*25)+5 , 45,20);
}
