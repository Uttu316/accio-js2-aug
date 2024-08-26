const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function count(n) {
  if (n === 0) {
    return 0;
  }

  return 1 + count(parseInt(n / 10));
}

readline.question("", (n) => {
  const result = count(parseInt(n));
  console.log(result);
  readline.close();
});
