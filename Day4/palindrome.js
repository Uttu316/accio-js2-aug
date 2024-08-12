const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (str) => {
  console.log(isPalindrome(str));
  rl.close();
});

function isPalindrome(str) {
  str = str.toLowerCase();

  let nstr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "a" && str[i] <= "z") {
      nstr += str[i];
    }
  }

  let i = 0;
  let j = nstr.length - 1;

  let isPalindrome = 1;
  while (i < j) {
    if (nstr[i] === nstr[j]) {
      i++;
      j--;
    } else {
      isPalindrome = 0;
      break;
    }
  }

  return isPalindrome;
}
