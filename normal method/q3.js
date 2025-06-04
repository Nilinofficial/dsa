// write a funbction that returns the largest element in the array

let arr = [5, 0, 10, 8, 17, 1];

function findLargestElement(array) {
  let largestElement = array[0];

  for (let index = 1; index < array.length; index++) {
    if (array[index] > largestElement) {
      largestElement = array[index];
    }
  }

  return largestElement;
}

let result = findLargestElement(arr);
console.log(result);
