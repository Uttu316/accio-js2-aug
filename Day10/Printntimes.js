const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function printWord(N) {
  // Write your code here
  if (x === 0) {
    return;
  }

  console.log("AccioSchool");

  printWord(x - 1);
}

rl.on("line", (N) => {
  printWord(parseInt(N));
  rl.close();
});
