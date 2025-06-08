// find the second largest element in an array

let arr = [4, 15, 0, 17, 12, 13, 16];

// hint => find the largest first , find the element which when subtracted from the largest element
// gives a value closest to zero but not zero

function findSecondLargestElement(array) {
  let largestElement = array[0];
  let secondLargestElement = array[0];

  for (let index = 0; index < array.length; index++) {
  
    if (array[index] > largestElement) {
        secondLargestElement = largestElement;
      largestElement = array[index];
    }
     else  if(array[index]>secondLargestElement){
      secondLargestElement = array[index]
     }
  }
  return secondLargestElement;
}

const result = findSecondLargestElement(arr);
console.log(result);
