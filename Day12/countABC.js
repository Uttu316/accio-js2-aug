const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (input) => {
  console.log(CountABC(input, 0));
  rl.close();
});
function CountABC(str, i) {
  if (i === str.length - 2) {
    return 0;
  }

  const sub = str.slice(i, i + 3);
  if (sub === "abc" || sub === "aba") {
    return 1 + CountABC(str, i + 1);
  }
  return CountABC(str, i + 1);
}
