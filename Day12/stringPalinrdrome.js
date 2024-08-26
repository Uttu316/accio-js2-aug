const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (input) => {
  const result = isPalindrome(input);
  console.log(result ? "YES" : "NO");
  rl.close();
});

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }

  if (str[0] === str[str.length - 1]) {
    str = str.substring(1, str.length - 1);
    return isPalindrome(str);
  }
  return false;
}
