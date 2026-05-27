let arr = [7, 5, 4, 1, 3, 2];

let n = arr.length;

function insertionSort(arr) {
  for (let i = 1;i<n;i++){
    let currentElement = arr[i];
    let prevElement = i-1;


    while(arr[prevElement]<currentElement && prevElement>=0 ){
        arr[prevElement+1] = arr[prevElement];
        prevElement--
    }
    arr[prevElement+1] = currentElement
  }
  return arr
}

const res= insertionSort(arr);
console.log(res);

// worst case  => time complexity => O(n^2) Bad complexity
// space complexity => Constant => 0(1)
