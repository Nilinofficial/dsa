
let nums= [-1,0,3,5,9,12];

var search = function(nums, target) {
    
    let start = 0;
    let end = nums.length -1;
    let middle;

    while(end>=start){
     
       middle = Math.floor((start + end )/2);
       
       if(target === nums[middle]) return middle;
       else if(target > nums[middle]) start = middle+1;
       else  end = middle-1;
    }
    return -1;

};

console.log(search(nums,0));
