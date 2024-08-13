const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function lowerUpper(s) {
  // Write your code here
  return s === s.toUpperCase() ? "U" : "L";
}

readline.question("", (ch) => {
  console.log(lowerUpper(ch));
  readline.close();
});
