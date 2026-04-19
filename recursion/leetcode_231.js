/*
Given an integer n, return true if it is a power of two. Otherwise, return false.
An integer n is a power of two, if there exists an integer x such that n == 2x.

Input: n = 1
Output: true


if n is divided by 2 and if it reaches 1 by dividing again and again , it is a power of 2.
*/


function isPowerofTwo(n){

    if(n<1) return false;
    if(n==1) return true;

  return isPowerofTwo(n/2);

}

const res = isPowerofTwo(16);

console.log(res);

// it can be solved by many other ways also.