const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (N) => {
  rl.on("line", (a) => {
    const nums = a.split(" ").map(Number);
    const ans = sorting5(nums.length, nums);
    console.log(ans);
    rl.close();
  });
});

function sorting5(n, arr) {
  arr.sort((a, b) => a - b);

  let max = arr[n - 1] * arr[n - 2];
  let min = arr[0] * arr[1];

  let diff = max - min;
  return diff;
}
