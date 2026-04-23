/* Sort the array in ascending order using bubble sort.

 The idea of bubble sort is swap every two Pair.So n-1 times of iteration.
 But in iteration the swap will be n-1- i th iteration.

 which means if its 3rd iteration and n = 4
 the swapping will only occur only 1 time. (but while coding iteration starts from 0)

 */

 let arr = [5,2,4,1];

function bubbleSort(arr){
let n = arr.length;

for(let i=0;i<n-1;i++){
    for (let j=0;j<n-1-i;j++){
        if(arr[j]>arr[j+1]){
            let temp = arr[j+1];
            arr[j+1]=arr[j];
            arr[j]= temp

        }
    }
}

return arr

}


console.log(bubbleSort(arr));


// the above code can cause unneccessary running of loop . So we optimize with a flag

function optimizedBubbleSort() {
    let n = arr.length;

for(let i=0;i<n-1;i++){
    let swapped = false
    for (let j=0;j<n-1-i;j++){
        if(arr[j]>arr[j+1]){
            [arr[j],arr[j+1]] = [[arr[j+1],arr[j]]]
             swapped === true
        }
    }
    if(!swapped) break
}

return arr

}