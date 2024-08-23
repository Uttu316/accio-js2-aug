const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (n) => {
  readline.question("", (arr) => {
    arr = arr.split(" ").map(Number);
    printArray(arr, parseInt(n));
    readline.close();
  });
});

function printArray(arr, n) {
  if (n === 0) {
    return;
  }

  printArray(arr, n - 1);
  process.stdout.write(arr[n - 1] + " ");
}
