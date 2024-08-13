const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let arr = [];

readline.question("", (num) => {
  n = parseInt(num);
  readArray(0);
});

function readArray(i) {
  if (i < n) {
    readline.question("", (word) => {
      arr.push(word);
      readArray(i + 1);
    });
  } else {
    let result = getStrings(arr);
    for (let i = 0; i < result.length; i++) {
      console.log(result[i]);
    }
    readline.close();
  }
}

let row1 = "qwertyuiop";
let row2 = "asdfghjkl";
let row3 = "zxcvbnm";

function getRow(ch) {
  if (row1.includes(ch)) {
    return 1;
  } else if (row2.includes(ch)) {
    return 2;
  } else {
    return 3;
  }
}

function getStrings(arr) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    let firstCharRow = getRow(word[0]);
    let isGood = true;
    for (let j = 1; j < word.length; j++) {
      let ch = word[j];
      let rowNo = getRow(ch);

      if (rowNo !== firstCharRow) {
        isGood = false;
        break;
      }
    }
    if (isGood) {
      arr.push(word);
    }
  }
  return ans;
}
