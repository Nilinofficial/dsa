
const arr = [45,22,65,14,52,54,58,565];


// slowest method of searching 
// iterate through each element in an array and get the result
// we know array index starts from 0
// ends at array.length - 1
// so we can make a for loop based on that

const targetElement  = 14;

const linearSearchtoFindElement  = (arr,targetElement) => {
    for (let index=0;index<arr.length;index++) {

        if(arr[index] == targetElement) return `Element found at index ${index}`;
        
    }
    return "Element does not found"
}

  const targetFound =  linearSearchtoFindElement(arr,targetElement);

  console.log(targetFound);