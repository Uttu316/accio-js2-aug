const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (N) => {
  rl.on("line", (a) => {
    const arr = a.split(" ").map(Number);
    const result = isSorted(arr, N);
    console.log(result);
    rl.close();
  });
});

function isSorted(arr, n) {
  let s = -1;

  // find starting point if next value is smaller than the current value
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] < arr[i]) {
      s = i;
      break;
    }
  }

  // if not found it means the array is sorted
  if (s === -1) {
    return "Yes";
  }

  let e = -1;
  // find ending point if previous value is bigger than the current value
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i - 1] > arr[i]) {
      e = i;
      break;
    }
  }

  let isDecline = true;

  // if the subarray b/w starting & ending points is not completly decline, it can't be sorted
  for (let i = s; i < e; i++) {
    if (arr[i + 1] > arr[i]) {
      isDecline = false;
      return "No";
    }
  }
  // console.log({isDecline})

  // the starting-1 point value has to be smaller than ending value.
  if (arr[s - 1] > arr[e]) {
    return "No";
  }

  // the starting point value has to be smaller than ending +1 value.
  if (arr[s] > arr[e + 1]) {
    return "No";
  }
  return "Yes";
}
