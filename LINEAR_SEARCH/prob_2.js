// Find whether l exists in the name or not ?

// name = Nilin

const myName = "Nilin";
const targetElement = "n";

// charAt will return the chart of that index in the string

function findChar(name, targetElement) {
  for (let index = 0; index < name.length; index++) {
    if (targetElement === name.charAt(index)) {
      return index;
    }
  }
  return -1;
}

const result = findChar(myName, targetElement);
console.log(result);
