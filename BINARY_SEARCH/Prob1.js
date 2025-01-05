const arr = [4, 8, 10, 11, 12, 16, 18, 20];

const targetElement = 4;

function binarySearch(arr, targetElement) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (targetElement < arr[mid]) {
      end = mid - 1;
    } else if (targetElement > arr[mid]) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

const result = binarySearch(arr, targetElement);
console.log(result);
