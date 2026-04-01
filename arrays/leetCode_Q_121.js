/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and
 choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. 
If you cannot achieve any profit, return 0.


Input: prices = [7,1,5,3,6,4]
Output: 5
*/
let prices = [7,1,5,3,6,4]

function maximumProfit(prices) {

    let minimum = prices[0];
    let maximumProfit = 0

    for (let i = 1; i < prices.length; i++) {
        if (prices[i]<minimum ) {
            minimum = prices[i]
        }

        if (prices[i]-minimum > maximumProfit){
            maximumProfit = prices[i]-minimum
        }

        
    }

  return maximumProfit
    

}

const res = maximumProfit(prices);
console.log(res);

// Note : here buying and selling cannot be done on same day and selling should come after buying
// so directly check for the max profit instead of checking for maximum
// if we add maximum , extra conditions are needed and also high chance of wrong result as maximum
// can be before minimum.