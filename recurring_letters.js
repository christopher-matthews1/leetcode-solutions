let str = "SKETCHERS";

function recurringChar(str) {
  let counts = {};
  for (let char of str) {
    if (counts.hasOwnProperty(char)) {
      return char;
    } else {
      counts[char] = true;
    }
  }
}
console.log(recurringChar(str));
