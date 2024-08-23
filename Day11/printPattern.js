const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function pattern(n) {
  if (n === 0) {
    return;
  }
  pattern(n - 1);
  console.log("* ".repeat(n));
}

readline.question("", (n) => {
  pattern(parseInt(n));
  readline.close();
});
