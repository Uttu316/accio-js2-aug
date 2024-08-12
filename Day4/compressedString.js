var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
let strs = [];
let q;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;

  if (lineNumber == 0) {
    q = parseInt(line);
  }

  if (lineNumber > 0) {
    strs.push(line);
    q--;
  }

  if (q == 0) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  for (let i = 0; i < strs.length; i++) {
    console.log(compressString(strs[i]));
  }
}

function compressString(str) {
  let c = 1;

  let ans = "";

  for (let i = 0; i <= str.length; i++) {
    let ch = str[i];
    let next = str[i + 1];

    if (ch === next) {
      c++;
    } else {
      if (c === 1) {
        ans += ch;
      } else {
        ans += ch + c;
      }
      c = 1;
    }
  }
  return ans;
}
