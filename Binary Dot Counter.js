/*I was slightly anoyyed that GDQ's counter was off
So I made my own binary dot counter/timer
This does require a HTML5 Canvas*/

function wait(){
  var d1=new Date();
  var d2=null;
  do{d2=new Date();}
  while(d2-d1<1000);
}

var count=5;
var binary;
var canvas=document.getElementById("myCanvas");
var cns=canvas.getContext("2d");
cns.fillStyle="#000000";
for(var n=0;n<9;n++){
  cns.fillRect(n*50,0,5,150);
  cns.fillRect(0,n*25,405,5);
}

binary=(count.toString(2)).split("");
for(b in binary){
    cns.fillRect(355-(Math.floor(b/6)*50), 125-((b%6)*25)+5 ,45,20*binary[b]);
}

/*for(var n=0;n<8;n++){
	for(var n2=0;n2<6;n2++){
    	cns.fillStyle="#"+((1<<24)*Math.random()|0).toString(16);
        cns.fillRect((n*50)+5,(n2*25)+5,45,20);
	}
}*/
