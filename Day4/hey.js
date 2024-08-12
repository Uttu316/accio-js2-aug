const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function hey(s) {
  let c = s.length - 2;

  let ans = `h${"e".repeat(c * 2)}y`;
  return ans;
}

readline.question("", (str) => {
  let result = hey(str);
  console.log(result);
  readline.close();
});
