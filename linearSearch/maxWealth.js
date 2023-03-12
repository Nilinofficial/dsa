const accounts = [[1,5],[7,3],[3,5]];


function maxWealth(accounts) {
   let max = 0;
   let temp = 0;
   for(i=0;i<accounts.length;i++) {
    for(j=0;j<accounts[i].length;j++) {
        temp = temp+accounts[i][j];
    }
    if(temp>max) max = temp;
    temp = 0;
   }
   return  max; 
}

 const result  = maxWealth(accounts);
 console.log(result);