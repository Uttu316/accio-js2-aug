const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (n) => {
  readline.question("", (arr) => {
    arr = arr.split(" ").map(Number);
    console.log(isPalindrome(arr, n - 1));
    readline.close();
  });
});
function isPalindrome(arr, j, i = 0) {
  if (i >= j) {
    return true;
  }
  if (arr[i] === arr[j]) {
    return isPalindrome(arr, j - 1, i + 1);
  }
  return false;
}
