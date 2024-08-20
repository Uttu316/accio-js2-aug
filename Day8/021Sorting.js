const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (n) => {
  readline.question("", (arr) => {
    arr = arr.split(" ").map(Number);
    let ans = Sorting021(n, arr);
    console.log(ans.join(" "));
    readline.close();
  });
});

function Sorting021(n, arr) {
  let zFlag = 0;
  let tFlag = arr.length - 1;

  let i = 0;

  while (i <= tFlag) {
    if (arr[i] === 0) {
      swap(arr, i, zFlag);
      zFlag++;
      i++;
    } else if (arr[i] === 2) {
      i++;
    } else {
      swap(arr, i, tFlag);
      tFlag--;
    }
  }

  return arr;
}

function swap(arr, x, y) {
  let t = arr[x];
  arr[x] = arr[y];
  arr[y] = t;
}
