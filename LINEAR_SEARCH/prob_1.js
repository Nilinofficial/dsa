// Find whether 14 exists in the array or not ?
// arr = [18,12,16,14,17,21,23,24];
const arr = [18, 12, 16, 14, 17, 21, 23, 24];
const targetElement = 16;
function findTheElement(arr, targetElement) {
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
const result1 = findTheElement(arr, targetElement);
console.log("native", result1);
// alernate methods using array methods
// findIndex
const result2 = arr.findIndex((element) => element === targetElement);
console.log("findIndex", result2);
