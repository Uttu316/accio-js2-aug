const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
});

rl.on("close", () => {
  let t = Number(input.shift());
  while (t-- > 0) {
    let s = input.shift();
    let n = Number(input.shift());
    let A = [];
    for (let i = 0; i < n; i++) {
      A.push(input.shift());
    }
    console.log(goodStrings(s, A, n));
  }
});

function goodStrings(s, arr, n) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    let isGood = true;
    for (let j = 0; j < word.length; j++) {
      let chr = word[j];

      if (!s.includes(chr)) {
        isGood = false;
        break;
      }
    }

    if (isGood) {
      count++;
    }
  }
  return count;
}
