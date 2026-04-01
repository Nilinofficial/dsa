/*
Given a binary array nums, return the maximum number of consecutive 1's in the array.

Input: nums = [1,1,0,1,1,1]
Output: 3
*/

let nums = [1,1,0,1,1,1]

const maximumConsecutive = (nums) => {

    let pointer = 0;
    let max = 0

    for (let i=0;i<nums.length;i++){
        if(nums[i] !==1 ){
          pointer = 0
        } else {
         pointer ++ 
          if(max<pointer){
            max = pointer;
        }
        }
       
       
       
    }

    return max;
}


let result = maximumConsecutive(nums);

console.log(result);
