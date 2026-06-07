let arr = [5, 2, 8, 1, 9];


// recursive function

function mergeSort(nums) {

    if (nums.length <= 1) return nums;

    let middle = Math.floor(nums.length / 2);
    let left = mergeSort(nums.slice(0, middle));
    let right = mergeSort(nums.slice(middle));

    return merge(left, right);

}

// utility function
function merge(left, right) {

    let sortedArr = [];
    let n = left.length + right.length;


    let pointerLeft = 0;
    let pointerRight = 0;

    for (let i = 0; i < n; i++) {

        if (
            pointerRight >= right.length ||
            (
                pointerLeft < left.length &&
                left[pointerLeft] < right[pointerRight]
            )
        ) {
            sortedArr[i] = left[pointerLeft];
            pointerLeft++
        } else {
            sortedArr[i] = right[pointerRight];
            pointerRight++
        }

    }

    return sortedArr;
}

let res = mergeSort(arr);
console.log(res);
