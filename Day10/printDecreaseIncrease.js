const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  printDI(parseInt(input));
  rl.close();
});

function printDI(n) {
  // your code here
  if (n === 0) {
    return;
  }
  console.log(n);
  printDI(n - 1);
  console.log(n);
}
