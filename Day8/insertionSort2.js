const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let arr = [];

readline.question("", (num) => {
  n = parseInt(num);
  readline.on("line", (line) => {
    arr = line.split(" ").map(Number);
    insertionSort(arr, n);
    readline.close();
  });
});

function insertionSort(arr, n) {
  // Write your code here

  for (let i = 1; i < n; i++) {
    let j = i - 1;
    let selected = arr[i];

    while (j >= 0 && arr[j] > selected) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = selected;
    console.log(arr.join(" "));
  }
}
