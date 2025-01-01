// leetcode
// 1295. Find Numbers with Even Number of Digits
// Given an array nums of integers, return how many of them contain an even number of digits.
//  Input: nums = [12,345,2,6,7896]

const nums = [12, 345, 2, 6, 7896];

var findNumbers = function (nums) {
  let count = 0;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index].toString().length % 2 == 0) {
      count = count+1;
    }
  }
  return count;
};


// written for leetcode