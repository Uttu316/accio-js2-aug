const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (input) => {
  console.log(countX(input, 0, input.length));
  rl.close();
});

function countX(str, i, n) {
  if (i === n) {
    return 0;
  }
  if (str[i] === "x") {
    return 1 + countX(str, i + 1, n);
  }
  return countX(str, i + 1, n);
}
