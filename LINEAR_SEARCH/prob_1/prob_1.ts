// Find whether 14 exists in the array or not ?

// arr = [18,12,16,14,17,21,23,24];

const arr = [18, 12, 16, 14, 17, 21, 23, 24];
const targetElement = 16;

function findTheElement(arr: number[], targetElement: number) {
  if (arr.length === 0) {
    return -1;
  }

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === targetElement) {
      return index;
    }
  }
  return -1;
}

const result = findTheElement(arr, targetElement);
console.log(result);

export {};
