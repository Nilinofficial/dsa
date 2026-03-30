/*
   Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique 
   element appears only once.
   The relative order of the elements should be kept the same.
   Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, 
   return the number of unique elements k.

   Input: nums = [1,1,2]
   Output: 2, nums = [1,2,_]

   Input: nums = [0,0,1,1,1,2,2,3,3,4]
   Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
 */

   let nums = [0,0,1,1,1,2,2,3,3,4];

   function findUniqueElements(nums){
   let pointer = 1;
   let uniqueNumber= nums[0]

   for (let i=1;i<nums.length;i++){
     if(nums[i]>uniqueNumber){
        nums[pointer] = nums[i]
        uniqueNumber= nums[i]
        pointer++
     }
   }

   return pointer
   }


   const result  = findUniqueElements(nums);
   console.log(result);
   

// this is two pointer approach , we are using two pointers i and pointer.
// also known as fast-slow pointer approach
// when ever something comes like duplicates and sorted array- remember this two pointer approach