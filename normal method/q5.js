// print star pattern

// *
// **
// ***
// ****
// *****

for (let i = 1; i < 6; i++) {
  let star = "";
  for (let j = 0; j < i; j++) {
    star = star + "*";
  }
  console.log(star);
}
