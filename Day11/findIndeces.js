const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (input) => {
  const inputs = input.split(" ");
  const n = parseInt(inputs[0]);
  const x = parseInt(inputs[1]);
  readline.question("", (arrayInput) => {
    const arr = arrayInput.split(" ").map(Number);
    find(arr, n, x);
    readline.close();
  });
});

function find(arr, n, x) {
  if (n === 0) {
    return;
  }

  find(arr, n - 1, x);
  const curr = arr[n - 1];
  if (curr == x) {
    process.stdout.write(n - 1 + " ");
  }
}
