// write a function that searches for an element in an array and return the array and
// returns the index. If the element is not present return -1.
const numberArray = [2, 4, 10, 12, 16, 18, 20];
const targetElement = 16;
function findIndex(array, element) {
    for (var index = 0; index < numberArray.length; index++) {
        if (array[index] === element) {
            return index;
        }
    }
    return -1;
}
let result = findIndex(numberArray, targetElement);
console.log(result);
