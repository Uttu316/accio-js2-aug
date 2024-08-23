const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (n) => {
  readline.question("", (nums) => {
    const arr = nums.split(" ").map(Number);
    const result = max(arr, arr.length);
    console.log(result);
    readline.close();
  });
});

function max(arr, n) {
  if (n === 1) {
    return arr[0];
  }

  return Math.max(arr[n - 1], max(arr, n - 1));
}
