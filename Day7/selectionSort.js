const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function selectionSort(arr) {
  for (let j = 0; j < arr.length; j++) {
    let min = arr[j];
    let minPos = j;

    for (let i = j; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
        minPos = i;
      }
    }
    // console.log({min,minPos})
    swap(arr, minPos, j);
  }
  return arr;
}

function swap(arr, x, y) {
  let tem = arr[x];
  arr[x] = arr[y];
  arr[y] = tem;
}

readline.question("", (n) => {
  readline.question("", (arr) => {
    arr = arr.split(" ").map(Number);
    let ans = selectionSort(arr);
    console.log(ans.join(" "));
    readline.close();
  });
});
