var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;

  if (lineNumber == 1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  let Arr = inputArr[1].split(" ").map((x) => parseInt(x));

  console.log(insertionSort(Arr).join(" "));
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let picked = arr[i];
    let j = i - 1;

    while (j >= 0 && picked < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = picked;
  }

  return arr;
}
