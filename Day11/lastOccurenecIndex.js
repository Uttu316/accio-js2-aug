const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (N) => {
  readline.question("", (A) => {
    readline.question("", (T) => {
      const arr = A.split(" ").map(Number);
      console.log(lastIndex(arr, Number(T), Number(N) - 1));
      readline.close();
    });
  });
});

function lastIndex(arr, t, i) {
  //Write your code here
  if (i < 0) {
    return -1;
  }

  if (arr[i] === t) {
    return i;
  }
  return lastIndex(arr, t, i - 1);
}
