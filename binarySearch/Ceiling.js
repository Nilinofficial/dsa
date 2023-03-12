const arr = [2,3,5,7,9,14,16,18,22,24,25,30];

let targetElement= 23;

const binarySearch = (arr,targetElement) => {
 let start = 0;
 let end = arr.length - 1;

 while (start<=end) {
    let mid = Math.round(start + (end-start)/2);
   if(arr[mid]<targetElement) start = mid + 1 ;
   if (arr[mid] == targetElement) return arr[mid];
   if(arr[mid] >targetElement) end = mid-1;

 }

 return arr[start];
}

 const result =  binarySearch(arr,targetElement);
 console.log(result);