const arr = [4,25,15,4854,254,64,78];



const evenDigitsinArray = (arr) => {
 let count = 0;

 for(let index=0;index<arr.length;index++) {
   
    if(arr[index].toString().length %2 == 0 ) count++;
 }

 return count;
}

const result = evenDigitsinArray(arr);

console.log(result);