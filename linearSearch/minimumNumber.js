
const arr = [12,2,5,55,14,1,58,145];

// find the minimum number in the array



const findMinimumNumber = (arr) => {

    let minimumNumber = arr[0];

    for(let index=0;index<arr.length;index++) {
        if(arr[index]<minimumNumber) minimumNumber = arr[index]
    }

    return minimumNumber;


}
console.log(`the ${minimumNumber}`);

const result  = findMinimumNumber(arr);
console.log(`The smallest number in array is ${result}`);