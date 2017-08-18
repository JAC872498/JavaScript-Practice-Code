/*A, E, I, O, U, L, N, R, S, T     1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10
http://exercism.io/exercises/javascript/scrabble-score/readme*/

function score(wrd){
  wrd=wrd.toUpperCase();
  var tot=0;
  for(var n=0;n<wrd.length;n++){
    if(wrd.split("")[n]=="D"||wrd.split("")=="G") tot+=2;
    else if(wrd.split("")[n]=="B"||wrd.split("")[n]=="C"||wrd.split("")[n]=="M"||wrd.split("")[n]=="P") tot+=3;
    else if(wrd.split("")[n]=="F"||wrd.split("")[n]=="H"||wrd.split("")[n]=="V"||wrd.split("")[n]=="W"||wrd.split("")[n]=="Y") tot+=4;
    else if(wrd.split("")[n]=="K") tot+=5;
    else if(wrd.split("")[n]=="J"||wrd.split("")[n]=="X") tot+=8;
    else if(wrd.split("")[n]=="Q"||wrd.split("")[n]=="Z") tot+=10;
    else tot+=1;
  }
  return tot;
}

var topWord="",topScore=0,totScore=0,currWord="",currScore=0,words=[],scores=[];
while(currWord!="0"){
  currWord=prompt("XD");
  currScore=score(currWord);
  if(currScore>topScore){
    topWord=currWord;
    topScore=currScore;
  }
  words.push(currWord);
  scores.push(currScore);
}
console.log(words);
console.log(scores);
