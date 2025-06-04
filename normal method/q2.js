// Write a function that returns the number of negative numbers in an array

let arr = [2, -9, 17, 0, 1, -10, -4, 8];

function findNegativeNumbers(array) {
  let count = 0;

  for (let index = 0; index < arr.length; index++) {
    if (array[index] < 0) {
      count = count + 1;
    }
  }
  return count;
}

const result = findNegativeNumbers(arr);
console.log(`The number of negative numbers is ${result}`);
