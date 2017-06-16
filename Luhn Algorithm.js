/*https://en.wikipedia.org/wiki/Luhn_algorithm
I don't feel like typing out what it is*/

function luhn(str){
	str=str.replace(/\s+/g, '');
	var tot=0
	for(var x=0;x<str.length;x++){
		if(x%2==0){
			if(str[x]*2>9){
				tot+=parseInt((str[x]*2)-9);
			}else{
				tot+=parseInt(str[x]*2);
			}
		}else{
			tot+=parseInt(str[x]);
		}
	}
	return(tot%10==0);
}

console.log(luhn("4539 1488 0343 6467"));
console.log(luhn("8273 1232 7352 0569"));
