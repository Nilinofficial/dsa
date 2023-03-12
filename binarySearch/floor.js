const arr = [2,3,5,7,9,14,16,18,22,24,25,30];

let targetElement= 12;
// find the floot of the target element
//  biggest num smaller than the target element if the target element is not there if the target element not found.


const binarySearch = (arr,targetElement) => {
 let start = 0;
 let end = arr.length - 1;
 while(start<=end) {
    let mid = Math.floor(start + (end-start)/2);
     if(arr[mid]>targetElement) end = mid - 1;
     if(arr[mid]<targetElement) start =mid+1;
     if(arr[mid] == targetElement) return arr[mid];

 }

 return arr[end];
}

 const result = binarySearch(arr,targetElement);
 console.log(result);