// Find how many times a given element appears in an array.

const arr = [2, 3, 3, 4, 5, 6, 7, 43, 3, 3];

const targetElement = 123;

const linearSearch = (arr, targetElement) => {
  let count = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === targetElement) {
      count = count + 1;
    }
  }
  return count;
};

const result = linearSearch(arr, targetElement);
console.log(result);
