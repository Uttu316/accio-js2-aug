const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (n) => {
  console.log(factorial_recursive(parseInt(n)));
  readline.close();
});

function factorial_recursive(n) {
  // your code here
  if (n === 1) {
    return 1;
  }
  return n * factorial_recursive(n - 1);
}
