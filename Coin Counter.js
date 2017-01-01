/*This takes a price and a array of possible coins(in least to greadest) and gives the largest coins you could use.
 
 Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
Output : 25, 10, 10, 1*/

function coin(total, arr){
  var coins=arr.sort(function(a, b){return a-b})
  var num;
  var str="You would need a coin of ";
  while(total>0){
    top=0;
    for(var x=0;x<=coins.length;x++){
      if(coins[x]<=total){
        num=coins[x];
      }
    }
    total-=num;
    str=str+num+", ";
  }
  console.log(str);
}
coin(46,[5,25,1,10])
