/*https://en.wikipedia.org/wiki/6174_(number)
6174(AKA "Kaprekars Constant") is a special number.
If you arrange a <=4 digit number is descending and ascending order and subtract them then you'll eventualy get to it.
This shows how many times you need to repeat this to get to 6174*/

function KapConstant(num) { 
    var times=0;
    while(num!=6174){
        times+=1;
        var numArrD=((((""+num).split("")).sort()).reverse()).join("");
        var numArrA=(((""+num).split("")).sort()).join("");
        numArrD*=(Math.pow(10,(4-(""+num).length)));
        num=numArrD-numArrA;
    }
    return(times);
}
