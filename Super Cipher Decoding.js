/*This is a mega-collection of word ciphers, ranging from weak ones you use with friends to extreme ones used by militaries
This file is used to decode words
below is a list of the ciphers that numbers corespond to, along with an explination of the cipher
0- 'leet speek' https://en.wikipedia.org/wiki/Leet
1- morse code https://morsecode.scphillips.com/morse2.html
2- pig latin https://en.wikipedia.org/wiki/Pig_Latin#Rules
3- four square cipher http://practicalcryptography.com/ciphers/classical-era/four-square/
4- polybius square http://practicalcryptography.com/ciphers/classical-era/polybius-square/
5- rotate  grid cipher http://rumkin.com/tools/cipher/rotate.php
6- ROT13 http://practicalcryptography.com/ciphers/classical-era/rot13/
7- keyword cipher https://en.wikipedia.org/wiki/Keyword_cipher
8- ADFGVX cipher http://practicalcryptography.com/ciphers/adfgvx-cipher/
9- enigma cipher http://practicalcryptography.com/ciphers/mechanical-era/enigma/
Created by Jordan Camilletti*/

function findAlph(letter,alph,dimensions){//this is used to find the number location of letters(A=0,B=1,C=2,G=7) or (A=[0,0],B=[0,1],C=[0,2],G=[1,0])
	var location=[]
	if(dimensions==1){
		for(var x=0;x<alph.length;x++){
			if(alph[x]==letter) location.push(x);
		}
	}else if(dimensions==2){
		for(var y=0;y<alph.length;y++){
			for(var x=0;x<alph[y].length;x++){
				if(alph[y][x]==letter){
					location.push(y);
					location.push(x);
				}
			}
		}
	}
	return(location);
}

function sp33kD(wrd){
	wrd=(wrd.toUpperCase()).split("");
	var newWrd="";
	for(var char in wrd){
		if(char=="4"){
			newWrd+="A";
		}else if(char=="3"){
			newWrd+="E";
		}else if(char=="1"){
			newWrd+="l";
		}else if(char=="0"){
			newWrd+="O";
		}else if(char=="Z"){
			newWrd+="S";
		}else if(char=="7"){
			newWrd+="S";
		}else{
			newWrd+=char;
		}
	}
	return(newWrd);
}

function morseD(wrd){
	wrd=(wrd.toUpperCase()).split("");
	var newWrd="";
	var alph=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"];
	var morseAlph=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--..",".----","..---","...--","....-",".....","-....","--...","---..","----.","-----"];
	for(var char in wrd){
		if(wrd[char]==" ")newWrd=newWrd+" ";
		else newWrd=newWrd+alph[findAlph(wrd[char],morseAlph,1)[0]];
	}
	return(newWrd);
}

function pigLatinD(wrd){//DONE
	wrd=(wrd.toUpperCase()).split("");
	if((wrd.slice(wrd.length-3,wrd.length)).join("")=="WAY"||(wrd.slice(wrd.length-3,wrd.length)).join("")=="YAY"){
		//should start with a vowel
		return((wrd.slice(0,wrd.length-3)).join(""));
	}else{
		//shouldn't start with a vowel
		wrd=wrd.slice(0,wrd.length-2);
		if(wrd[wrd.length-2]=="S"||wrd[wrd.length-2]=="C"||wrd[wrd.length-2]=="T"){//Used to see if there's a multiple letter constant(ch,th,sm,st,etc)
			if(wrd[wrd.length-1]=="M"||wrd[wrd.length-1]=="H"||wrd[wrd.length-1]=="T"){//This isn't all of them but it's enough of them
				return(wrd.slice(wrd.length-2,wrd.length).join("")+" "+wrd.slice(0,wrd.length-2).join(""));
			}
		}
		return(wrd.slice(wrd.length-1,wrd.length).join("")+" "+wrd.slice(0,wrd.length-1).join(""));
	}
}

function fourSquareD(wrd,ciph1,ciph2){
	wrd=(wrd.toUpperCase()).split("");
	ciph1=(ciph1.toUpperCase()).match(/.{1,6}/g);
	ciph2=(ciph2.toUpperCase()).match(/.{1,6}/g);
	var newWrd="";
	var alph=[["A","B","C","D","E","F"],
		  ["G","H","I","J","K","L"],
		  ["M","N","O","P","Q","R"],
		  ["S","T","U","V","W","X"],
		  ["Y","Z","1","2","3","4"],
		  ["5","6","7","8","9","0"]];
	var switchX1,switchX2,switchY1,switchY2;
	for(var char=0;char<wrd.length;char+=2){
		switchY1=findAlph(wrd[char],ciph1,2)[0];
		switchX2=findAlph(wrd[char],ciph1,2)[1];
		switchY2=findAlph(wrd[char+1],ciph2,2)[0];
		switchX1=findAlph(wrd[char+1],ciph2,2)[1];
		newWrd=newWrd+alph[switchY1][switchX1]+alph[switchY2][switchX2];
	}
	return(newWrd);
}

function polybiusD(wrd){
	wrd=(wrd.toUpperCase()).split("");
	var newWrd="";
	var alph=[["A","B","C","D","E","F"],
		  ["G","H","I","J","K","L"],
		  ["M","N","O","P","Q","R"],
		  ["S","T","U","V","W","X"],
		  ["Y","Z","1","2","3","4"],
		  ["5","6","7","8","9","0"]];
	for(var char=0;char<wrd.length-1;char+=2){
		newWrd=newWrd+alph[wrd[char]-1][wrd[char+1]-1];
	}
	return(newWrd);
}

function rotateD(wrd,rot){
	wrd=(wrd.toUpperCase()).split("");
	var newWrd="";
	var x,y,xyBuff;//xyBuff is used to swap x and y
	alph=[["A","B","C","x","D","E","F"],//'x'==middle of graph (#,0) or (0,#)
	      ["G","H","I","x","J","K","L"],
	      ["M","N","O","x","P","Q","R"],
	      ["x","x","x","x","x","x","x"],
	      ["S","T","U","x","V","W","X"],
	      ["Y","Z","0","x","1","2","3"],
	      ["4","5","6","x","7","8","9"]];
	for(var char in wrd){
		x=findAlph(wrd[char],alph,2)[1]-3;
		y=findAlph(wrd[char],alph,2)[0]*-1+3;
		//console.log("GRID: X:"+x+" Y:"+y);
		//console.log("ARRAY: X:"+(x+3)+" Y:"+(-y+3));
		for(var r=0;r<rot/90;r++){
			xyBuff=x;
			x=-y;
			y=xyBuff;
			//console.log("GRID: X:"+x+" Y:"+y);
			//console.log("ARRAY: X:"+(x+3)+" Y:"+(-y+3));
		}
		newWrd=newWrd+alph[-y+3][x+3];
	}
	return(newWrd);
}

function ROT13D(wrd,rot){
	wrd=(wrd.toUpperCase()).split("");
	var newWrd="";
	var alph=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"];
	for(var char in wrd){
		var x=findAlph(wrd[char],alph,1)[0];
		if(x-rot<0){
			newWrd=newWrd+alph[x+rot];
		}else{
			newWrd=newWrd+alph[x-rot];
		}
	}
	return(newWrd);
}

function keyWordD(wrd,keyWrd){
	wrd=(wrd.toUpperCase()).split("");
	keyWrd=(keyWrd.toUpperCase()).split("");
	var newWrd="";
	var alph=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"];
	if(keyWrd.length<36){
		for(var letter in alph){
			if(!keyWrd.includes(alph[letter])){
				keyWrd.push(alph[letter]);
			}
		}
	}
	for(var char in wrd){
		newWrd=newWrd+alph[findAlph(wrd[char],keyWrd,1)[0]];
	}
	return(newWrd);
}

function ADFGVXD(wrd,keySquare,keyWrd,keyWrd2=keyWrd){
	wrd=(wrd.toUpperCase()).split(" ");
	keyWrd=(keyWrd.toUpperCase()).split("");
	keyWrd2=(keyWrd2.toUpperCase()).split("");//This is just the keyWrd but it stays unsorted
	var gridLetters=["A","D","F","G","V","X"];
	var sortedWrd=[];
	var newWrd="";
	var finalWrd="";
	var longest=0;
	keySquare=(keySquare.toUpperCase()).match(/.{1,6}/g);
	for(var column in wrd){
		wrd[column]=(keyWrd.sort())[column]+wrd[column];
	}
	for(var char in keyWrd2){
		for(column in wrd){
			if(wrd[column][0]==keyWrd2[char]){
				sortedWrd.push(wrd[column].substring(1,wrd[column].length));
			}
		}
	}
	for(var long in sortedWrd){
		if(sortedWrd[long].length>sortedWrd[5].length){//Finding the columns with longer length
			longest=long;
		}
	}
	for(char in sortedWrd[5]){
		newWrd=newWrd+sortedWrd[0][char]+sortedWrd[1][char]+sortedWrd[2][char]+sortedWrd[3][char]+sortedWrd[4][char]+sortedWrd[5][char];
	}
	for(char=0;char<=longest;char++){//Both of these loops take the letters out of column form and put them in a single string
		newWrd=newWrd+sortedWrd[char][[sortedWrd[char].length]-1];
	}
	for(char=0;char<newWrd.length;char+=2){
		finalWrd=finalWrd+keySquare[findAlph(newWrd[char],gridLetters,1)[0]][findAlph(newWrd[char+1],gridLetters,1)[0]];
	}
	return(finalWrd);
}
	
function enigmaD(wrd,rot){
	wrd=(wrd.toUpperCase()).split("");
	rot=(rot.toUpperCase()).split("");
	var newWrd="";
	var alph=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	var rotor1=["E","K","M","F","L","G","D","Q","V","Z","N","T","O","W","Y","H","X","U","S","P","A","I","B","R","C","J"];
	var rotor2=["A","J","D","K","S","I","R","U","X","B","L","H","W","T","M","C","Q","G","Z","N","P","Y","F","V","O","E"];
	var rotor3=["B","D","F","H","J","L","C","P","R","T","X","V","Z","N","Y","E","I","W","G","A","K","M","U","S","Q","O"];
	var reflectorA=["E","J","M","Z","A","L","Y","X","V","B","W","F","C","R","Q","U","O","N","T","S","P","I","K","H","G","D"];
	for(var char in wrd){
		if(findAlph(wrd[char],alph,1)[0]-findAlph(rot[0],alph,1)[0]<0) var r1=rotor1[findAlph(wrd[char],alph,1)[0]-findAlph(rot[0],alph,1)[0]+26];
		else var r1=rotor1[findAlph(wrd[char],alph,1)[0]-findAlph(rot[0],alph,1)[0]];//Rotor 1 reflected
      
		if(findAlph(r1,alph,1)[0]-findAlph(rot[1],alph,1)[0]<0) var r2=rotor2[findAlph(r1,alph,1)[0]-findAlph(rot[1],alph,1)[0]+26];
		else var r2=rotor2[findAlph(r1,alph,1)[0]-findAlph(rot[1],alph,1)[0]];//Rotor 2 reflected
      
		if(findAlph(r2,alph,1)[0]-findAlph(rot[2],alph,1)[0]<0) var r3=rotor3[findAlph(r2,alph,1)[0]-findAlph(rot[2],alph,1)[0]+26];
		else var r3=rotor3[findAlph(r2,alph,1)[0]-findAlph(rot[2],alph,1)[0]];//Rotor 3 reflected
      
		var refA=reflectorA[findAlph(r3,alph,1)[0]];//Reflector
      
		if(findAlph(refA,rotor3,1)[0]-findAlph(rot[2],alph,1)[0]<0) r3=alph[findAlph(refA,rotor3,1)[0]-findAlph(rot[2],alph,1)[0]+26];
		else r3=alph[findAlph(refA,rotor3,1)[0]-findAlph(rot[2],alph,1)[0]];//Rotor 3
      
		if(findAlph(r3,rotor2,1)[0]-findAlph(rot[1],alph,1)[0]<0) r2=alph[findAlph(r3,rotor2,1)[0]-findAlph(rot[1],alph,1)[0]+26];
		else r2=alph[findAlph(r3,rotor2,1)[0]-findAlph(rot[1],alph,1)[0]];//Rotor 2
      
		if(findAlph(r2,rotor1,1)[0]-findAlph(rot[0],alph,1)[0]<0) r1=alph[findAlph(r2,rotor1,1)[0]-findAlph(rot[0],alph,1)[0]+26];
		else r1=alph[findAlph(r2,rotor1,1)[0]-findAlph(rot[0],alph,1)[0]];//Rotor 1
		newWrd=newWrd+r1;
	}
	return(newWrd);
}
