const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let s = new Set();
function perm(str, ans = "") {
  if (str === "") {
    if (!s.has(ans)) {
      s.add(ans);
      console.log(ans);
    }
    return;
  }

  for (let i = 0; i < str.length; i++) {
    let curr = str[i];

    let rest = str.slice(0, i) + str.slice(i + 1);

    perm(rest, ans + curr);
  }
}

rl.on("line", (input) => {
  perm(input);
  rl.close();
});
