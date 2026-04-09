/*
Find the sum of first n numbers using recursion


without recursion O(1) time complexity

function sum(n){
   return n * (n+1)/2
}

const res = sum(5);
console.log(res)
*/


;

// using recursion

let sum = 0;


function findSum(n){

   if(n==0 )return 0;
   return n + findSum(n-1)
}

const res = findSum(5);
console.log(res);