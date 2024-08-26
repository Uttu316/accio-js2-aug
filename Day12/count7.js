const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (n) => {
  console.log(cacount7(parseInt(n)));
  readline.close();
});

function count7(n, ans = 0) {
  // your code here
  if (n === 0) {
    return ans;
  }
  const r = n % 10;
  n = Math.floor(n / 10);
  if (r === 7) {
    return count7(n, ans + 1);
  }
  return count7(n, ans);
}
