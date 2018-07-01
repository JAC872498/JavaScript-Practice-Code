/*I was slightly anoyyed that GDQ's counter was off
So I made my own binary dot counter/timer*/

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
for(var n=0;n<9;n++){
ctx.fillRect(n*50,0,5,150);
}
