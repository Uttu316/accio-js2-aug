function arrayGenerator(s) {
  return "[" + s.split(",").join(", ") + "]";
}

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
let strs = [];

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);

  lineNumber++;
  if (lineNumber == 0) {
    size = parseInt(inputArr[0]);
  }
  if (lineNumber > 0) {
    strs.push(line);
  }

  if (lineNumber == size) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  for (let i = 0; i < strs.length; i++) {
    let ans = arrayGenerator(strs[i]);
    console.log(ans);
  }
}
