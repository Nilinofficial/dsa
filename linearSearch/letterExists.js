// check whether the letter n exists in kunal or not

const name = "kunal";
const targetLetter = 'n';


const searchLetter = (targetName,targetLetter) => {
    for(let index=0;index<targetName.length;index++){
           if(targetLetter == targetName[index]) return `target letter found at index ${index}`
    }

    return "Letter not found in the name"
}

const result  = searchLetter(name,targetLetter);
console.log(result);