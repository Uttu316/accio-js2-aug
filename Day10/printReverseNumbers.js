const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function printtillN(n) {
  if (n === 0) {
    return;
  }

  process.stdout.write(n + " ");

  printtillN(n - 1);
}

rl.on("line", (N) => {
  printtillN(parseInt(N));

  rl.close();
});
