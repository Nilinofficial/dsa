const arr = [[25,35,565,145],[1455,45,58,52,41],[588,8,85,96,174],[545,12,1]];

const targetElement = 1;


const binarySearch2DArray = (arr,targetElement) => {
 for(let firstArrayValue=0;firstArrayValue<arr.length;firstArrayValue++) {
     for(let secondArrayValue=0;secondArrayValue<arr[firstArrayValue].length;secondArrayValue++){
        if(arr[firstArrayValue][secondArrayValue] == targetElement) return `element found at index ${firstArrayValue}${secondArrayValue}`;
     }
 }
 return "element not found";
}

const result = binarySearch2DArray(arr,targetElement);
console.log(result);