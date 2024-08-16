const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let arr = [];

rl.on("line", (input) => {
  if (!n) {
    n = parseInt(input);
  } else {
    arr = input.split(" ").map(Number);
    console.log(maximum_occurrence(arr, n));
    rl.close();
  }
});

function maximum_occurrence(arr, n) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    if (obj[curr]) {
      obj[curr] += 1;
    } else {
      obj[curr] = 1;
    }
  }

  let max = -Infinity;
  let maxPos = -1;
  for (let key in obj) {
    let value = obj[key];
    if (value > max) {
      max = value;
      maxPos = key;
    }
  }

  // console.log(maxPos)

  return maxPos;
}
