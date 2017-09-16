/*This is a mega-collection of word ciphers, ranging from weak ones you use with friends to extreme ones used by militaries
below is a list of the ciphers that numbers corespond to, along with an explination of the cipher
0- four square cipher http://practicalcryptography.com/ciphers/classical-era/four-square/
1- polybius square http://practicalcryptography.com/ciphers/classical-era/polybius-square/
2- ROT13 http://practicalcryptography.com/ciphers/classical-era/rot13/
3- enigma cipher http://practicalcryptography.com/ciphers/mechanical-era/enigma/
4- lorenz cipher http://practicalcryptography.com/ciphers/mechanical-era/lorenz/
5-
6-
7-
8-
9-
10-*/

function fourSquare(wrd,ciph1,ciph2){//DONE
	ciph1=(ciph1.toUpperCase()).match(/.{1,6}/g);
	ciph2=(ciph2.toUpperCase()).match(/.{1,6}/g);
	var alph=[["A","B","C","D","E","F"],
         	 ["G","H","I","J","K","L"],
         	 ["M","N","O","P","Q","R"],
         	 ["S","T","U","V","W","X"],
         	 ["Y","Z","1","2","3","4"],
         	 ["5","6","7","8","9","0"]];
	var letters=wrd.split("");
	var switchX1,switchX2,switchY1,switchY2;
	if(letters.length%2!==0) letters.push("x");
	var newWrdE="", newWrdD="";//E=encoded, D=decoded
	for(var l=0;l<letters.length;l+=2){
		//console.log(letters[l]+letters[l+1]);
		for(var y=0;y<6;y++){
			for(var x=0;x<6;x++){
				if(alph[y][x]==letters[l].toUpperCase()){
					switchX2=x;
					switchY1=y;
				}
				if(alph[y][x]==letters[l+1].toUpperCase()){
					switchX1=x;
					switchY2=y;
				}
			}
		}
		newWrdE=newWrdE+ciph1[switchY1][switchX1]+ciph2[switchY2][switchX2];
		newWrdD=newWrdD+alph[switchY1][switchX2]+alph[switchY2][switchX1];
		//console.log(ciph1[switchY1][switchX1]+ciph2[switchY2][switchX2]);
		//console.log(alph[switchY1][switchX2]+alph[switchY2][switchX1]);
	}
	return("Encoded:"+newWrdE+"\nDecoded:"+newWrdD);
}

function polybius(wrd){
	wrd=wrd.toUpperCase();
    wrd=wrd.split("");
	var newWrdE="",newWrdD="";
	var alph=[["A","B","C","D","E","F"],
         	 ["G","H","I","J","K","L"],
         	 ["M","N","O","P","Q","R"],
         	 ["S","T","U","V","W","X"],
         	 ["Y","Z","1","2","3","4"],
         	 ["5","6","7","8","9","0"]];
	for(var char in wrd){
		for(var y=0;y<6;y++){
			for(var x=0;x<6;x++){
				if(alph[y][x]===wrd[char]){
					newWrdE=newWrdE+y+x;
				}
			}
		}
	}
    if(wrd.length%2===0){
      for(var n=0;n<wrd.length;n+=2){
        //console.log(wrd[n]+" "+wrd[n+1]+alph[wrd[n]][wrd[n+1]]+"\n");
        newWrdD=newWrdD+alph[wrd[n]][wrd[n+1]];
      }
    }
	return("Encoded:"+newWrdE+"\nDecoded:"+newWrdD);
}


function ROT13(wrd){//NOT DONE
	
}

function enigma(wrd,pos){//NOT DONE
	var alph=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	var rotor1=["E","K","M","F","L","G","D","Q","V","Z","N","T","O","W","Y","H","X","U","S","P","A","I","B","R","C","J"];
	var rotor2=["A","J","D","K","S","I","R","U","X","B","L","H","W","T","M","C","Q","G","Z","N","P","Y","F","V","O","E"];
	var rotor3=["B","D","F","H","J","L","C","P","R","T","X","V","Z","N","Y","E","I","W","G","A","K","M","U","S","Q","O"];
}

function lorenz(wrd){//NOT DONE
	
}
