const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (input) => {
  console.log(noX(input));
  rl.close();
});
function noX(str, i = 0, ans = "") {
  if (i === str.length) {
    return ans;
  }
  if (str[i] !== "x") {
    ans += str[i];
  }
  return noX(str, i + 1, ans);
}
