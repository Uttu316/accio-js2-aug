const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (N) => {
  readline.question("", (arr) => {
    arr = arr.split(" ").map(Number);
    bubbleSort(N, arr);
    console.log(arr.join(" "));
    readline.close();
  });
});

function bubbleSort(n, arr) {
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  // console.log(arr)

  function swap(arr, x, y) {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
  }
}
