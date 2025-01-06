// order agnostic binary search

// const nums = [3, 3, 3, 3, 5, 5, 6, 7, 8, 10, 14, 16];
const nums = [17,17,10,8,8,8,7,6]
const targetElement = 7;

function orderAgnosticBS(arr, targetElement) {
  start = 0;
  end = arr.length - 1;

  let isAscending = arr[start] < arr[end];
 
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (isAscending) {
      if (targetElement > arr[mid]) {
        start = mid + 1;
      } else if (targetElement < arr[mid]) {
        end = mid - 1;
      } else {
        return mid;
      }
    } else {
      if (targetElement > arr[mid]) {
        end = mid - 1;
      } else if (targetElement < arr[mid]) {
        start = mid + 1;
      } else {
        return mid;
      }
    }
  }
  return -1;
}

const res = orderAgnosticBS(nums, targetElement);
console.log(res);
