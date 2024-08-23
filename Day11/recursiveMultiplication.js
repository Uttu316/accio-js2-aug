const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function sum(n, m) {
  if (n == 0) {
    return 0;
  }
  return m + sum(n - 1, m);
}

readline.question("", (n) => {
  readline.question("", (m) => {
    console.log(sum(parseInt(n), parseInt(m)));
    readline.close();
  });
});
