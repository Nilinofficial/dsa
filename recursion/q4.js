// find the factorial of n using recursion


function factorial(n){

    if(n===1) return 1;
    return n* factorial(n-1)
}


const res = factorial(5);
console.log(res);
