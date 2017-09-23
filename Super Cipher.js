/*This is a mega-collection of word ciphers, ranging from weak ones you use with friends to extreme ones used by militaries
below is a list of the ciphers that numbers corespond to, along with an explination of the cipher
0- four square cipher http://practicalcryptography.com/ciphers/classical-era/four-square/
1- polybius square http://practicalcryptography.com/ciphers/classical-era/polybius-square/
2- ROT13 http://practicalcryptography.com/ciphers/classical-era/rot13/
3- keyword cipher https://en.wikipedia.org/wiki/Keyword_cipher
4- enigma cipher http://practicalcryptography.com/ciphers/mechanical-era/enigma/
5- lorenz cipher http://practicalcryptography.com/ciphers/mechanical-era/lorenz/
6-
7-
8-
9-
10-*/

function findAlph(letter,alph,dimensions){
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
	return location;
}

function fourSquare(wrd,ciph1,ciph2){//DONE
	ciph1=(ciph1.toUpperCase()).match(/.{1,6}/g);
	ciph2=(ciph2.toUpperCase()).match(/.{1,6}/g);
	var alph=[["A","B","C","D","E","F"],
		  ["G","H","I","J","K","L"],
		  ["M","N","O","P","Q","R"],
		  ["S","T","U","V","W","X"],
		  ["Y","Z","1","2","3","4"],
		  ["5","6","7","8","9","0"]];
	wrd=wrd.toUpperCase();
	wrd=wrd.split("");
	var switchX1,switchX2,switchY1,switchY2;
	if(wrd.length%2!==0) wrd.push("x");
	var newWrdE="", newWrdD="";//E=encoded, D=decoded
	for(var char=0;char<wrd.length;char+=2){
		switchX2=findAlph(wrd[char],alph,2)[1];
		switchY1=findAlph(wrd[char],alph,2)[0];
		switchX1=findAlph(wrd[char+1],alph,2)[1];
		switchY2=findAlph(wrd[char+1],alph,2)[0];
		newWrdE=newWrdE+ciph1[switchY1][switchX1]+ciph2[switchY2][switchX2];
		newWrdD=newWrdD+alph[switchY1][switchX2]+alph[switchY2][switchX1];
		//console.log(ciph1[switchY1][switchX1]+ciph2[switchY2][switchX2]);
		//console.log(alph[switchY1][switchX2]+alph[switchY2][switchX1]);
	}
	return("Encoded:"+newWrdE+"\nDecoded:"+newWrdD);
}

function polybius(wrd){//DONE
	var decode=false;
	if(isNaN(wrd)===false) decode=true;
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
		newWrdE=newWrdE+findAlph(wrd[char],alph,2)[0]+findAlph(wrd[char],alph,2)[1];
	}
	if(wrd.length%2===0){
		for(var n=0;n<wrd.length;n+=2){
			//console.log(wrd[n]+" "+wrd[n+1]+alph[wrd[n]][wrd[n+1]]+"\n");
			try{ 
				newWrdD=newWrdD+alph[wrd[n]][wrd[n+1]];
			}catch(err){
				return("Encoded:"+newWrdE);
			}
		}
	}else{
		return("Encoded:"+newWrdE);
	}
	return("Encoded:"+newWrdE+"\nDecoded:"+newWrdD);
}


function ROT13(wrd,rot){//DONE
	var newWrdE="",newWrdD="";
	wrd=wrd.toUpperCase();
	wrd=wrd.split("");
	var alph=["A","B","C","D","E","F",
              "G","H","I","J","K","L",
              "M","N","O","P","Q","R",
              "S","T","U","V","W","X",
              "Y","Z","1","2","3","4",
              "5","6","7","8","9","0"]; 
	for(var char=0;char<wrd.length;char++){
      var x=findAlph(wrd[char],alph,1)[0];
      if(x+rot>35){
					newWrdE=newWrdE+alph[x-rot];
				}else{
					newWrdE=newWrdE+alph[x+rot];
				}
				if(x-rot<0){
					newWrdD=newWrdD+alph[x+rot];
				}else{
					newWrdD=newWrdD+alph[x-rot];
				}
      
	}
	return("Encoded:"+newWrdE+"\nDecoded:"+newWrdD);
} 

function keyWord(wrd,keyWrd){
	
}

function enigma(wrd,rot){//DONE
	rot=rot.toUpperCase();
	rot=rot.split("");
	wrd=wrd.toUpperCase();
	wrd=wrd.split("");
	var newWrd="";
	var alph=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	var rotor1=["E","K","M","F","L","G","D","Q","V","Z","N","T","O","W","Y","H","X","U","S","P","A","I","B","R","C","J"];
	var rotor2=["A","J","D","K","S","I","R","U","X","B","L","H","W","T","M","C","Q","G","Z","N","P","Y","F","V","O","E"];
	var rotor3=["B","D","F","H","J","L","C","P","R","T","X","V","Z","N","Y","E","I","W","G","A","K","M","U","S","Q","O"];
	var reflectorA=["E","J","M","Z","A","L","Y","X","V","B","W","F","C","R","Q","U","O","N","T","S","P","I","K","H","G","D"];
	for(var char=0;char<wrd.length;char++){
		if(findAlph(wrd[char],alph,1)[0]+findAlph(rot[0],alph,1)[0]>25) var r1=rotor1[findAlph(wrd[char],alph,1)[0]+findAlph(rot[0],alph,1)[0]-26];
		else var r1=rotor1[findAlph(wrd[char],alph,1)[0]+findAlph(rot[0],alph,1)[0]];//Rotor 1
      
		
		if(findAlph(r1,rotor1,1)[0]+findAlph(rot[1],alph,1)[0]>25) var r2=rotor2[findAlph(r1,rotor1,1)[0]+findAlph(rot[1],alph,1)[0]-26];
		else var r2=rotor2[findAlph(r1,rotor1,1)[0]+findAlph(rot[1],alph,1)[0]];//Rotor 2
		
		if(findAlph(r2,rotor2,1)[0]+findAlph(rot[2],alph,1)[0]>25) var r3=rotor3[findAlph(r2,rotor2,1)[0]+findAlph(rot[2],alph,1)[0]-26];
		else var r3=rotor3[findAlph(r2,rotor2,1)[0]+findAlph(rot[2],alph,1)[0]];//Rotor 3
      
		var refA=reflectorA[findAlph(r3,rotor3,1)[0]];//Reflector
		//console.log(refA);
      
		if(findAlph(refA,reflectorA,1)[0]+findAlph(rot[2],alph,1)[0]>25) r3=rotor3[findAlph(refA,reflectorA,1)[0]+findAlph(rot[2],alph,1)[0]-26];
		else r3=rotor3[findAlph(refA,reflectorA,1)[0]+findAlph(rot[2],alph,1)[0]];//Rotor 3 reflected
	
		if(findAlph(r3,rotor3,1)[0]+findAlph(rot[1],alph,1)[0]>25) r2=rotor2[findAlph(r3,rotor3,1)[0]+findAlph(rot[1],alph,1)[0]-26];
		else r2=rotor2[findAlph(r3,rotor3,1)[0]+findAlph(rot[1],alph,1)[0]];//Rotor 2 reflected
		
		if(findAlph(r2,rotor2,1)[0]+findAlph(rot[0],alph,1)[0]>25) r1=rotor1[findAlph(r2,rotor2,1)[0]+findAlph(rot[0],alph,1)[0]-26];
		else r1=rotor1[findAlph(r2,rotor2,1)[0]+findAlph(rot[0],alph,1)[0]];//Rotor 1 reflected
		newWrd=newWrd+r1;
	}
	return(newWrd);
}

function lorenz(wrd){//NOT DONE
	
}
