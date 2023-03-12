// leetcode problem 744

const arr =  ['c','f','g'];
let target = 'g';

const CeilingBinarySearch = (arr, targetElement) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if(targetElement < arr[mid]) end = mid - 1;
    if(targetElement > arr[mid]) start = mid+1;
    if(targetElement == arr[mid]) start = mid+1; 
  }
//   this  return arr[start%arr.length] is same as return start but it provides an additional functionality for a condition.
// that it says if last element is equal to target element then show zeroth element
// so when coming out of the loop if mid == target element and if it is the last element , start = mid +1 {mid will be last element + 1}
// that is equal to arr.length
// that is the index becomes zero 
  return arr[start%arr.length]
};

const result = CeilingBinarySearch(arr, target);
console.log(result);