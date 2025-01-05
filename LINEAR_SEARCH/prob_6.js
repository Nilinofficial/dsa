// A customer's wealth is the amount of money they have in all their bank accounts.
//  The richest customer is the customer that has the maximum wealth.

// Input: accounts = [[1,2,3],[3,2,1]]
// accounts = [[1,5],[7,3],[3,5]]

// leetcode 1672

const accounts = [
  [1, 2, 3],
  [3, 2, 1],
];

var maximumWealth = function (accounts) {
  let tempWealth = 0;
  for (let row = 0; row < accounts.length; row++) {
    let wealth = 0;
    for (let col = 0; col < accounts[row].length; col++) {
      wealth = wealth + accounts[row][col];
    }
    if (wealth > tempWealth) {
      tempWealth = wealth;
    }
  }
  return tempWealth;
};
const res = maximumWealth(accounts);
console.log(res);

