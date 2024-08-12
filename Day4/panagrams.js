// your code here
var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;
var K;
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;

  if (lineNumber == 0) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const str = inputArr[0];
  console.log(isPangram(str));
}

function isPangram(str) {
  str = str.toLowerCase();

  //create a list for 26 character
  let list = new Array(26).fill(false);

  //check every alphabetic character and mark tru for its position in list
  for (let i = 0; i < str.length; i++) {
    let chr = str[i];

    if (chr >= "a" && chr <= "z") {
      let ascii = chr.charCodeAt();
      let pos = ascii - 97;

      list[pos] = true;
    }
  }

  // check is any character is false in list
  let isAllNotPresent = list.includes(false);

  if (isAllNotPresent) {
    return "not pangram";
  } else {
    return "pangram";
  }
}
