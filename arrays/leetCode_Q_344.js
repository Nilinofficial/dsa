/*
Write a function that reverses a string. The input string is given as an array of characters s.
You must do this by modifying the input array in-place with O(1) extra memory.

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
*/

let s = ["h","e","l","l","o"];


function reverseString(s){

    let temp;

    for(let i=0; i<=s.length/2;i++){
        temp =s[i];
        s[i]= s[s.length-1-i];
        s[s.length-1-i]=temp
    }

    return  s

}


const res= reverseString(s);

console.log(res);

// to reverse string in swap like this at the same time.
// This is also a two pointer technique. Swapping items with two pointers