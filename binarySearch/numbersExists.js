const arr = [2,4,6,12,24,36,42,51,57,58,69];

// find whether 51 exists in the array or not

let targetElement = 4;

const binarySearch = (arr,targetElement) => {
   let start = 0;
   let end = arr.length - 1;

   while(start<=end) {
    let mid = Math.round(start + (end - start)/2) ;
     console.log(mid);
    if(arr[mid]<targetElement) {
      start = mid+1;
    }
    if(arr[mid]>targetElement) end = mid-1;

    if(arr[mid] == targetElement)  return `item found at index ${mid}`

   }

   return "item not found"
}

const result =  binarySearch(arr,targetElement);
console.log(result);