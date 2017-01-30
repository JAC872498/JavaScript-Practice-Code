var choice=prompt("Enter 1 if you don't have side A, 2 if you don't have side B, or 3 if you don't have side C.");
if(choice==1){
	var C=prompt("Enter side C.");
	var B=prompt("Enter side B.");
	console.log("Side A is "+(Math.sqrt(C*C-B*B))+".");
}else if(choice==2){
	var A=prompt("Enter side A.");
	var C=prompt("Enter side C.");
	console.log("Side B is "+(Math.sqrt(C*C-A*A))+".");
}else if(choice==3){
	var A=prompt("Enter side A.");
	var B=prompt("Enter side B.");
	console.log("Side C is "+(Math.sqrt(B*B+A*A))+".");
}
