const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (input) => {
  comb(input);
  rl.close();
});
function comb(str, ans = "") {
  if (str.length === 0) {
    process.stdout.write(ans + " ");
    return;
  }
  const curr = str[0];
  let rest = str.slice(1);

  comb(rest, ans + curr);
  comb(rest, ans);
}

// question: https://course.acciojob.com/idle?question=47e066fc-64ac-4ce9-ab5f-3a3d6d522765
