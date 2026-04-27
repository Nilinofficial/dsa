let arr = [7,5,1,4,3,2];

// use selection sort to sort


function selectionSort(arr){

    let n = arr.length;

    for (let i=0;i<n-1;i++){
        let minIndex = i;

        for ( let j = i+1; j<n;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j
            }
        }

      if(minIndex!==i){
         [arr[i],arr[minIndex]] = [ arr[minIndex],arr[i]]
      }
    }

    return arr
};


console.log(selectionSort(arr));

// worst case  => time complexity => O(n^2) Bad complexity
// space complexity => Constant => 0(1)