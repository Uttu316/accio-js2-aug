const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function power(n, m) {
  if (m == 0) {
    return 1;
  }
  return n * power(n, m - 1);
}

readline.question("", (line) => {
  const [x, n] = line.split(" ").map(Number);
  console.log(power(x, n));
  readline.close();
});
