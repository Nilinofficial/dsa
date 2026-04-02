/*

Given an array nums containing n distinct numbers in the range [0, n],
 return the only number in the range that is missing from the array.

Input: nums = [3,0,1]

Output: 2

Note : when ever you find a missing number problem , check whether we can apply s(s+1)/2 
where s is the number of elements in the array

also note 0  is actually given in array to compensate the missing element when we use above eqn
*/


let nums = [3,0,1];

function findMissingNumber(nums){

    let totalSum= nums.length * (nums.length+1)/2;
    let currentSum = 0;
    
    for (let i=0;i<nums.length;i++){
        currentSum= currentSum+nums[i]
    }


    return totalSum - currentSum
}


let result = findMissingNumber(nums);

console.log(result);
