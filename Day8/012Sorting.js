const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let n = Number(input[0]);
  let arr = input[1].split(" ").map(Number);
  zero_one_two_sorting(arr);
  console.log(arr.join(" "));
});

function zero_one_two_sorting(arr) {
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      count0 += 1;
    } else if (arr[i] === 1) {
      count1 += 1;
    } else {
      count2 += 1;
    }
  }

  let k = 0;
  for (let i = 0; i < count0; i++) {
    arr[k] = 0;
    k++;
  }
  for (let i = 0; i < count1; i++) {
    arr[k] = 1;
    k++;
  }
  for (let i = 0; i < count2; i++) {
    arr[k] = 2;
    k++;
  }

  return arr;
}
