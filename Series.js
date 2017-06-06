/*Given a string of digits, output all the contiguous substrings of length n in that string.

For example, the string "49142" has the following 3-digit series:
491
914
142
And the following 4-digit series:
4914
9142*/

wrd="abc"
n=1;
for(var x=0;x<=wrd.length-n;x++){
  console.log(wrd.substring(x,x+n));
}
