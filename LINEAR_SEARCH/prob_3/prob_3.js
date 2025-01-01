// find the smallest number in the array

// arr =[23,7,12,13,15,2,156,34,4];

const arr = [23, 7, 12, 13, 15, 2, 156, 34, 4,1];

function findSmallestNumber(arr) {
  let smallestNumber = arr[0];

  for (let index = 0; index < arr.length; index++) {
    if (smallestNumber > arr[index]) {
      smallestNumber = arr[index];
    }
  }
  return smallestNumber;
}

const result = findSmallestNumber(arr);
console.log(result);

