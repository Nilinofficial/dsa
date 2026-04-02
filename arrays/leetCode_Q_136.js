/*
Given a non-empty array of integers nums, every element
 appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.

Input: nums = [2,2,1]

Output: 1


Note : one method is we can create a map and and can check which element has 1 as its value
using Map.get and set

other way is using bitwise XOR

*/



let nums = [2, 2, 1];


function findSingleElement(nums) {
    let singleElement;
    for (let i = 0; i < nums.length; i++) {
        singleElement = singleElement ^ nums[i]
    }

    return singleElement
}


const result = findSingleElement(nums);
console.log(result);
