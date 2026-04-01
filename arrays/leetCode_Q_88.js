/*

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, 
and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.
The final sorted array should not be returned by the function, 
but instead be stored inside the array nums1. To accommodate this,
 nums1 has a length of m + n, where the first m elements denote the elements that should be merged,
  and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
*/

let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
let m = 3;
let n = 3


function mergeArrays(nums1, m, nums2, n) {
    let nums1Copy = nums1;
    let p1 = 0
    let p2 = 0;

    for (let i = 0; i < m + n; i++) {
        if (p2 >= n || p1 < m && nums1Copy[p1] < nums2[p2]) {
            nums1[i] = nums1Copy[p1]
            p1++
        } else {
            nums1[i] = nums2[p2];
            p2++
        }
    }
    return nums1


}

const result = mergeArrays(nums1, m, nums2, n);
console.log(result);

// slice is done to make a copy
// you can also use [...nums1]
// in the if condition (p2>=n) means if the nums2 arrays is finished
// p1<m , if the nums 1 array is not finished.

