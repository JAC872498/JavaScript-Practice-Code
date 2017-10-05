/*This is a mega-collection of word ciphers, ranging from weak ones you use with friends to extreme ones used by militaries
This file is used to decode words
below is a list of the ciphers that numbers corespond to, along with an explination of the cipher
0- 'leet speek' https://en.wikipedia.org/wiki/Leet
1- morse code https://morsecode.scphillips.com/morse2.html
2- pig latin https://en.wikipedia.org/wiki/Pig_Latin#Rules
3- four square cipher http://practicalcryptography.com/ciphers/classical-era/four-square/
4- polybius square http://practicalcryptography.com/ciphers/classical-era/polybius-square/
5- ROT13 http://practicalcryptography.com/ciphers/classical-era/rot13/
6- keyword cipher https://en.wikipedia.org/wiki/Keyword_cipher
7- ADFGVX cipher http://practicalcryptography.com/ciphers/adfgvx-cipher/
8- enigma cipher http://practicalcryptography.com/ciphers/mechanical-era/enigma/
9- lorenz cipher http://practicalcryptography.com/ciphers/mechanical-era/lorenz/
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

function sp33k(wrd){//DONE
	var newWrd="";
	wrd=wrd.toUpperCase();
	wrd=wrd.split("");
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

function morse(wrd){//DONE
	wrd=wrd.toUpperCase();
	wrd=wrd.split("");
	var newWrd="";
	var alph=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"];
	var morseAlph=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--..",".----","..---","...--","....-",".....","-....","--...","---..","----.","-----"];
	for(var char in wrd){
		if(wrd[char]==" ")newWrd=newWrd+" ";
		else newWrd=newWrd+alph[findAlph(wrd[char],morseAlph,1)[0]];
	}
	return(newWrd);
}

function pigLatin(wrd){//NOT DONE
	wrd=wrd.toUpperCase();
	wrd=wrd.split("");
}

function fourSquare(wrd){//NOT DONE
	wrd=wrd.toUpperCase();
	wrd=wrd.split("");
}

function polybius(wrd){//NOT DONE
	wrd=wrd.toUpperCase();
	wrd=wrd.split("");
    var newWrd="";
	var alph=[["A","B","C","D","E","F"],
		  ["G","H","I","J","K","L"],
		  ["M","N","O","P","Q","R"],
		  ["S","T","U","V","W","X"],
		  ["Y","Z","1","2","3","4"],
		  ["5","6","7","8","9","0"]];
  for(var char in wrd){
    newWrd=newWrd+alph[wrd[char]][wrd[char+1]];
  }
  return(newWrd);
}

function ROT13(wrd,rot){//DONE
	wrd=wrd.toUpperCase();
	wrd=wrd.split("");
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

function keyWord(wrd,keyWrd){//DONE
	wrd=wrd.toUpperCase();
	wrd=wrd.split("");
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
		newWrd=newWrd+alph[findAlph(wrd[char],keyWrd,1)[0]];
	}
	return(newWrd);
}

function ADFGVX(wrd){//NOT DONE
	wrd=wrd.toUpperCase();
	wrd=wrd.split("");
}
	
function enigma(wrd,rot){//NOT DONE
	wrd=wrd.toUpperCase();
	wrd=wrd.split("");
}

function lorenz(wrd){//NOT DONE
	wrd=wrd.toUpperCase();
	wrd=wrd.split("");
}
