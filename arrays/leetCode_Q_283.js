/*
Given an integer array nums, move all 0's to the end of it while 
maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Input: nums = [0]
Output: [0]
 
*/

let nums = [0, 1, 0, 3, 12]


function removeAllZeroes(nums) {
    let pointer = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[pointer] = nums[i];
            pointer++
        }
    }

    for (let i = pointer; i < nums.length; i++) {
        nums[i] = 0
    }

    return nums
}


const result = removeAllZeroes(nums);
console.log(result);
