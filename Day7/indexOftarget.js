var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;

  if (lineNumber == 2) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  let Arr = inputArr[1].split(" ").map((x) => parseInt(x));
  let large = parseInt(inputArr[2]);
  console.log(findTargetIndex(Arr, large));
}

function findTargetIndex(arr, target) {
  // Sort the array in ascending order

  arr.sort((a, b) => a - b); //sorting number array

  const pos = arr.indexOf(target); // finding target value

  // console.log(pos) //position
  return pos;
}
