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
  console.log(count11(arr, 0));
});

function count11(arr, i, count = 0) {
  if (i === arr.length) {
    return count;
  }
  if (arr[i] === 11) {
    count += 1;
  }
  return count11(arr, i + 1, count);
}
