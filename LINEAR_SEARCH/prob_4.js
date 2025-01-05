// leetcode
// 1295. Find Numbers with Even Number of Digits
// Given an array nums of integers, return how many of them contain an even number of digits.
//  Input: nums = [12,345,2,6,7896]

const nums = [555, 901, 482, 1771];

// var findNumbers = function (nums) {
//   let count = 0;
//   for (let index = 0; index < nums.length; index++) {
//     if (nums[index].toString().length % 2 == 0) {
//       count = count+1;
//     }
//   }
//   return count;
// };

// written for leetcode

// solution 2

function findNumbers(nums) {
  let count = 0;

  for (let index = 0; index < nums.length; index++) {
    let length = 0;
    while (nums[index] > 0) {
      length = length + 1;
      nums[index] = Math.floor(nums[index] / 10);
    }
    if (length % 2 === 0) {
      count = count + 1;
    }
  }
  return count;
}

const result = findNumbers(nums);

console.log(result);
