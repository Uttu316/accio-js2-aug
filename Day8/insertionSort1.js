const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (n) => {
  readline.question("", (a) => {
    a = a.split(" ").map(Number);
    insertionSort1(a, parseInt(n));
    readline.close();
  });
});

function insertionSort1(arr) {
  let i = arr.length - 1;
  let picked = arr[i];
  // console.log({picked})
  let j = i - 1;

  while (j >= 0 && picked < arr[j]) {
    arr[j + 1] = arr[j];
    j--;
    console.log(arr.join(" "));
  }
  arr[j + 1] = picked;

  console.log(arr.join(" "));
}
