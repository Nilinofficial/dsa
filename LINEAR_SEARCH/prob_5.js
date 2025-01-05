// 2d array

// search element from 2d array

let arr = [
  [25, 24, 8, 42, 3],
  [94, 91, 72, 77, 85],
  [15, 32, 89, 79, 32],
  [49, 42, 64, 17, 4],
  [74, 36, 11, 21, 82],
];

const targetElement = 24;

function findNumber(arr, targetElement) {
  for (let row = 0; row < arr.length; row++) {
    for (let column = 0; column < arr[row].length; column++) {
      if (arr[row][column] === targetElement) {
        return [row, column];
      }
    }
  }
  return "element not found";
}

const res = findNumber(arr, targetElement);
console.log(res);
