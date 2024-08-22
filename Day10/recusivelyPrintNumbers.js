const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on("line", (line) => {
  const N = parseInt(line);
  rl.close();
  printTillN(N, 1);
});

function printTillN(N, i) {
  //Write your code here
  if (i > N) {
    return;
  }
  process.stdout.write(i + " ");
  printTillN(N, i + 1);
}
