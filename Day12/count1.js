const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function count(n) {
  if (n === 0) {
    return 0;
  }
  const digit = n % 10;
  if (digit === 1) {
    return 1 + count(parseInt(n / 10));
  }
  return count(parseInt(n / 10));
}

rl.on("line", (n) => {
  console.log(count(Number(n)));
  rl.close();
});
