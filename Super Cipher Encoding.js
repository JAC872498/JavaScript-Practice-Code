/*This is a mega-collection of word ciphers, ranging from weak ones you use with friends to extreme ones used by militaries
This file is used to encode words
below is a list of the ciphers that numbers corespond to, along with an explination of the cipher
0- 'leet speek' https://en.wikipedia.org/wiki/Leet
1- morse code https://morsecode.scphillips.com/morse2.html
2- pig latin https://en.wikipedia.org/wiki/Pig_Latin#Rules
3- four square cipher http://practicalcryptography.com/ciphers/classical-era/four-square/
4- polybius square http://practicalcryptography.com/ciphers/classical-era/polybius-square/
5- rotate grid cipher http://rumkin.com/tools/cipher/rotate.php
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

function sp33kE(wrd){
	wrd=(wrd.toUpperCase()).split("");
	var newWrd="";
	for(var char in wrd){
		if(char=="A"){
			newWrd+="4";
		}else if(char=="E"){
			newWrd+="3";
		}else if(char=="I"||char=="L"){
			newWrd+="1";
		}else if(char=="O"){
			newWrd+="0";
		}else if(char=="S"){
			newWrd+="Z";
		}else if(char=="T"){
			newWrd+="7";
		}else{
			newWrd+=char;
		}
	}
	return(newWrd);
}

function morseE(wrd){
	wrd=(wrd.toUpperCase()).split("");
	var newWrd="";
	var alph=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"];
	var morseAlph=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--..",".----","..---","...--","....-",".....","-....","--...","---..","----.","-----"];
	for(var char in wrd){
		if(wrd[char]==" ")newWrd=newWrd+" ";
		else newWrd=newWrd+morseAlph[findAlph(wrd[char],alph,1)[0]];
	}
	return(newWrd);
}

function pigLatinE(wrd){
	wrd=(wrd.toUpperCase()).split("");
	if(wrd[0]=="A" || wrd[0]=="E" || wrd[0]=="I" || wrd[0]=="O" || wrd[0]=="U" || wrd[0]=="Y"){
		return(wrd.join("")+"YAY");
	}
	while(wrd[0]!="A" && wrd[0]!="E" && wrd[0]!="I" && wrd[0]!="O" && wrd[0]!="U" && wrd[0]!="Y"){
		wrd.push(wrd[0]);
		wrd.shift();
	}
	return(wrd.join("")+"AY");
}

function fourSquareE(wrd,ciph1,ciph2){
	wrd=(wrd.toUpperCase()).split("");
	if(wrd.length%2!==0) wrd.push("X");
	ciph1=(ciph1.toUpperCase()).match(/.{1,6}/g);
	ciph2=(ciph2.toUpperCase()).match(/.{1,6}/g);
	var alph=[["A","B","C","D","E","F"],
		  ["G","H","I","J","K","L"],
		  ["M","N","O","P","Q","R"],
		  ["S","T","U","V","W","X"],
		  ["Y","Z","1","2","3","4"],
		  ["5","6","7","8","9","0"]];
	var switchX1,switchX2,switchY1,switchY2;
	var newWrd="";
	for(var char=0;char<wrd.length;char+=2){
		switchX2=findAlph(wrd[char],alph,2)[1];
		switchY1=findAlph(wrd[char],alph,2)[0];
		switchX1=findAlph(wrd[char+1],alph,2)[1];
		switchY2=findAlph(wrd[char+1],alph,2)[0];
		newWrd=newWrd+ciph1[switchY1][switchX1]+ciph2[switchY2][switchX2];
		//console.log(ciph1[switchY1][switchX1]+ciph2[switchY2][switchX2]);
		//console.log(alph[switchY1][switchX2]+alph[switchY2][switchX1]);
	}
	return(newWrd);
}

function polybiusE(wrd){
	wrd=(wrd.toUpperCase()).split("");
	var newWrd="";
	var alph=[["A","B","C","D","E","F"],
		  ["G","H","I","J","K","L"],
		  ["M","N","O","P","Q","R"],
		  ["S","T","U","V","W","X"],
		  ["Y","Z","1","2","3","4"],
		  ["5","6","7","8","9","0"]];
	for(var char=0;char<wrd.length-1;char+=2){
		newWrd=newWrd+findAlph(wrd[char],alph,2)[0]+findAlph(wrd[char],alph,2)[1];
	}
	return(newWrd);
}

function rotateE(wrd,rot){
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
      xyBuff=-x;
      x=y;
      y=xyBuff;
      //console.log("GRID: X:"+x+" Y:"+y);
      //console.log("ARRAY: X:"+(x+3)+" Y:"+(-y+3));
    }
    newWrd=newWrd+alph[-y+3][x+3];
  }
  return(newWrd);
}

function ROT13E(wrd,rot){
	wrd=(wrd.toUpperCase()).split("");
	var newWrd="";
	var alph=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"]; 
	for(var char in wrd){
		var x=findAlph(wrd[char],alph,1)[0];
		if(x+rot>35){
			newWrd=newWrd+alph[x-rot];
		}else{
			newWrd=newWrd+alph[x+rot];
		}
	}
	return(newWrd);
} 

function keyWordE(wrd,keyWrd){
	wrd=(wrd.toUpperCase()).split("");
	keyWrd=keyWrd.toUpperCase();
	keyWrd=keyWrd.split("");
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
		newWrd=newWrd+keyWrd[findAlph(wrd[char],alph,1)[0]];
	}
	return(newWrd);
}

function ADFGVXE(wrd,keySquare,keyWrd){
	wrd=(wrd.toUpperCase()).split("");
	var newWrd="";
	var newArr=[], columns=[];
	var gridLetters=["A","D","F","G","V","X"];
	keySquare=(keySquare.toUpperCase()).match(/.{1,6}/g);
	for(var char in wrd){//Mapping letters to grid letters
		newWrd=newWrd+gridLetters[findAlph(wrd[char],keySquare,2)[0]]+gridLetters[findAlph(wrd[char],keySquare,2)[1]];
	}
	for(var x=0;x<newWrd.length/keyWrd.length;x++){//Mapping those grid letters to the keyWrd
		newArr.push(newWrd.slice(0+(x*6),6+(x*6)))
	}
	for(var n in newArr[0]){//Adding the keyWrd letters to the front of the grid letter columns
		newWrd="";
		for(var c=0;c<newArr.length;c++){
			if(n<newArr[c].length){
				newWrd=newWrd+newArr[c][n];
			}
		}
		columns.push(keyWrd.split("")[n]+newWrd);
	}
	columns=columns.sort();//Sorting the keyWrd columns
	for(var letter in columns){//Putting the final columns into a string
		columns[letter]=(columns[letter].substring(1,columns[letter].length));
	}
	return(columns.join(""));
}

function enigmaE(wrd,rot){
	wrd=(wrd.toUpperCase()).split("");
	rot=(rot.toUpperCase()).split("");
	var newWrd="";
	var alph=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	var rotor1=["E","K","M","F","L","G","D","Q","V","Z","N","T","O","W","Y","H","X","U","S","P","A","I","B","R","C","J"];
	var rotor2=["A","J","D","K","S","I","R","U","X","B","L","H","W","T","M","C","Q","G","Z","N","P","Y","F","V","O","E"];
	var rotor3=["B","D","F","H","J","L","C","P","R","T","X","V","Z","N","Y","E","I","W","G","A","K","M","U","S","Q","O"];
	var reflectorA=["E","J","M","Z","A","L","Y","X","V","B","W","F","C","R","Q","U","O","N","T","S","P","I","K","H","G","D"];
	for(var char in wrd){
		if(findAlph(wrd[char],alph,1)[0]+findAlph(rot[0],alph,1)[0]>25) var r1=rotor1[findAlph(wrd[char],alph,1)[0]+findAlph(rot[0],alph,1)[0]-26];
		else var r1=rotor1[findAlph(wrd[char],alph,1)[0]+findAlph(rot[0],alph,1)[0]];//Rotor 1
		
		if(findAlph(r1,alph,1)[0]+findAlph(rot[1],alph,1)[0]>25) var r2=rotor2[findAlph(r1,alph,1)[0]+findAlph(rot[1],alph,1)[0]-26];
		else var r2=rotor2[findAlph(r1,alph,1)[0]+findAlph(rot[1],alph,1)[0]];//Rotor 2
		
		if(findAlph(r2,alph,1)[0]+findAlph(rot[2],alph,1)[0]>25) var r3=rotor3[findAlph(r2,alph,1)[0]+findAlph(rot[2],alph,1)[0]-26];
		else var r3=rotor3[findAlph(r2,alph,1)[0]+findAlph(rot[2],alph,1)[0]];//Rotor 3
		
		var refA=reflectorA[findAlph(r3,alph,1)[0]];//Reflector
		
		if(findAlph(refA,rotor3,1)[0]+findAlph(rot[2],alph,1)[0]>25) r3=alph[findAlph(refA,rotor3,1)[0]+findAlph(rot[2],alph,1)[0]-26];
		else r3=alph[findAlph(refA,rotor3,1)[0]+findAlph(rot[2],alph,1)[0]];//Rotor 3 reflected
		
		if(findAlph(r3,rotor2,1)[0]+findAlph(rot[1],alph,1)[0]>25) r2=alph[findAlph(r3,rotor2,1)[0]+findAlph(rot[1],alph,1)[0]-26];
		else r2=alph[findAlph(r3,rotor2,1)[0]+findAlph(rot[1],alph,1)[0]];//Rotor 2 reflected
		
		if(findAlph(r2,rotor1,1)[0]+findAlph(rot[0],alph,1)[0]>25) r1=alph[findAlph(r2,rotor1,1)[0]+findAlph(rot[0],alph,1)[0]-26];
		else r1=alph[findAlph(r2,rotor1,1)[0]+findAlph(rot[0],alph,1)[0]];//Rotor 1 reflected
		newWrd=newWrd+r1;
	}
	return(newWrd);
}
