const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function NumberSum(n) {
  if (n === 0) {
    return 0;
  }
  return n + NumberSum(n - 1);
}

readline.question("", (N) => {
  console.log(NumberSum(Number(N)));
  readline.close();
});
