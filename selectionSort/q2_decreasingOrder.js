let arr = [7,5,1,4,3,2];

// use selection sort to sort

// iterations for a selection sort will be n-1

function selectionSort(arr){

    let n = arr.length;

    for (let i=0;i<n-1;i++){

         let minimumValueIndex = i

        for (let j=i+1;j<n;j++){
          if(arr[j]>arr[minimumValueIndex]){
            minimumValueIndex=j
          }
        }

     if (minimumValueIndex !== i) {
   [arr[minimumValueIndex], arr[i]] = [arr[i], arr[minimumValueIndex]];
}

    }
   
    return arr

};


console.log(selectionSort(arr));

// worst case  => time complexity => O(n^2) Bad complexity
// space complexity => Constant => 0(1)