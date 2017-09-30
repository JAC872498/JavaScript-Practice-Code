/*This is a mega-collection of word ciphers, ranging from weak ones you use with friends to extreme ones used by militaries
This file is used to decode words
below is a list of the ciphers that numbers corespond to, along with an explination of the cipher
0- 'leet speek', not really a cipher as much as it is a joke translator https://en.wikipedia.org/wiki/Leet
1- morse code, also not much of a cipher but still one I wanted to include https://morsecode.scphillips.com/morse2.html
2- four square cipher http://practicalcryptography.com/ciphers/classical-era/four-square/
3- polybius square http://practicalcryptography.com/ciphers/classical-era/polybius-square/
4- ROT13 http://practicalcryptography.com/ciphers/classical-era/rot13/
5- keyword cipher https://en.wikipedia.org/wiki/Keyword_cipher
6- enigma cipher http://practicalcryptography.com/ciphers/mechanical-era/enigma/
7- lorenz cipher http://practicalcryptography.com/ciphers/mechanical-era/lorenz/
8-
9-
Created by Jordan Camilletti*/

function findAlph(letter,alph,dimensions){//this is used to find the number location of letters(A=0,B=1,C=2,G=7) or (A=[0,0],B=[0,1],C=[0,2],G=[1,0])
	letter=letter.toUpperCase();
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

function sp33k(wrd){//NOT DONE
}

function morse(wrd){//NOT DONE
}

function fourSquare(wrd){//NOT DONE
}

function polybius(wrd){//NOT DONE
}

function ROT13(wrd){//NOT DONE
}

function keyWord(wrd){//NOT DONE
}

function enigma(wrd){//NOT DONE
}

function lorenz(wrd){//NOT DONE
}
