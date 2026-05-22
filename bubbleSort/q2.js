// Sort descending

// input arr = [3, 7, 1, 9];


let arr = [3, 7, 1, 9];
let n= arr.length;

function descendingBubbleSort(arr){
    for (let i=0; i<n-1;i++){

        let swapped = false

    for( let j=0;j<n-i-1;j++){
        if(arr[j]<arr[j+1]){
            [arr[j],arr[j+1]]= [arr[j+1],arr[j]]
            swapped =true
        }
    }
    if(!swapped) break
}
}

descendingBubbleSort(arr);

console.log(arr);
