// Find the sum of all odd numbers in the array using recursion


let arr= [5,3,2,0,1];



function findSum(n){
 if(n<0)return 0;

 if(arr[n]%2==0) return findSum(n-1);
 return arr[n] + findSum(n-1);

}

const res = findSum(arr.length-1);

console.log(res);
