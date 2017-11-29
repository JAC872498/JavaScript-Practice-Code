/*http://exercism.io/exercises/javascript/say/readme
This spells out a given integer in text*/

var num=("1234567849".split("")).reverse();
if(num[0]=="0"){
  console.log("zero");
}
var numChunks=[];
var wrd="";
var finalWrd="";
var numbers=[
  ["one","two","three","four","five","six","seven","eight","nine"],
  ["onety","twenty","thirty","fourty","fifty","sixty","seventy","eighty","ninty"],
  ["one hundred","two hundred","three hundred","four hundred","five hundred","six hundred","seven hundred","eight hundred","nine hundred"]
];
var places=["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion"];
while(num.length){
  numChunks.push(num.splice(0,3));
}
for(var chunk in numChunks){
  for(var num in numChunks[chunk]){
    wrd=numbers[num][numChunks[chunk][num]-1]+" "+wrd;
  }
  finalWrd=wrd+places[chunk]+" "+finalWrd;
  wrd="";
}
console.log(finalWrd);
