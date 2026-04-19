// find the n th fibonacci number;

// using recursion

var fib = function(n) {
if(n<=1) return n
return fib(n-1)+ fib(n-2)
};

const res = fib(6);
console.log(res);



// iterative approach

var fibI = function(n) {
 
  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= n; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
};

console.log(fibI(6)); // 8