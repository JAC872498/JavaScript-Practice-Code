 /*Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
Output : 25, 10, 10, 1*/

function coin(total, coins){
  var t;
  while(total>0){
    top=0;
    for(var x=0;x<=coins.length;x++){
      if(coins[x]<=total){
        t=coins[x];
      }
    }
    total-=t;
    console.log("top:"+t+" total:"+total);
  }
}
coin(46,[1,5,10,25])
