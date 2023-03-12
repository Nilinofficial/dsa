const arr = [2,3,5,7,9,14,16,18,22,24,25,30];

let targetElement= 23;
// find the ceiling of the target element
// Ceiling means the smallest greatest element than the target element if the target element is not there.
// else target element

const binarySearch = (arr,targetElement) => {
 let start = 0;
 let end = arr.length - 1;

 while (start<=end) {
    let mid = Math.round(start + (end-start)/2);
   if(arr[mid]<targetElement) start = mid + 1 ;
   if (arr[mid] == targetElement) return arr[mid];
   if(arr[mid] >targetElement) end = mid-1;
//  this logic is same as binary search logic
 }
// if the item is not found in array, the start element becomes greater than end.
// That is it becomes just greatest smallest element than the target element.
 return arr[start];
}

 const result =  binarySearch(arr,targetElement);
 console.log(result);