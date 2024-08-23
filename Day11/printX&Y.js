const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

const inputs = [];
rl.on("line", (line) => {
  inputs.push(parseInt(line));
  if (inputs.length === 2) {
    rl.close();
    printXY(inputs[0], inputs[1]);
  }
});

function printXY(x, y) {
  if (x > y) {
    return;
  }

  process.stdout.write(x + " ");
  printXY(x + 1, y);
}
