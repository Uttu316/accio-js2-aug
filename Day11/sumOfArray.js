const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (n) => {
  readline.question("", (arr) => {
    arr = arr.split(" ").map(Number);
    console.log(sum(arr, arr.length));
    readline.close();
  });
});

function sum(arr, n) {
  if (n == 0) {
    return 0;
  }
  return arr[n - 1] + sum(arr, n - 1);
}
