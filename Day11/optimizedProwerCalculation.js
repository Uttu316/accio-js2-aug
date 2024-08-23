const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const [X, N] = input.split(" ").map(Number);
  console.log(power(X, N));
  rl.close();
});

function power(x, y) {
  if (y == 0) {
    return 1;
  }
  let ans = power(x, Math.floor(y / 2));

  if (y % 2 == 0) {
    return ans * ans;
  } else {
    return ans * ans * x;
  }
}
