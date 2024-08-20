const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let [n, m] = input[0].split(" ").map(Number);
  let mat = [];
  for (let i = 1; i <= n; i++) {
    mat.push(input[i].split(" ").map(Number));
  }
  sortCol(mat, n, m);
});

function sort(arr, n, m) {
  for (let k = 0; k < m; k++) {
    for (let i = 1; i < n; i++) {
      let j = i - 1;
      let selected = arr[i][k];

      while (j >= 0 && arr[j][k] > selected) {
        arr[j + 1][k] = arr[j][k];
        j--;
      }
      arr[j + 1][k] = selected;
    }
  }
  return arr;
}

function sortCol(arr, n, m) {
  const sortArr = sort(arr, n, m);
  for (let i = 0; i < n; i++) {
    console.log(sortArr[i].join(" "));
  }
}
