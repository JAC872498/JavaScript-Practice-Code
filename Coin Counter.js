 /*This takes a price and gives the greates number of coins that can be used to make the price
 
 Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
Output : 25, 10, 10, 1*/

function coin(total, coins){
  while(total>0){
    console.log(total);
    total-=coins[4];
  }
}
coin(46,[25, 10, 5, 2, 1]);
