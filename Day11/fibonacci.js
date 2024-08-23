const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function fib(n) {
  if (n === 1) {
    return 0;
  }
  if (n === 2) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
}

readline.question("", (n) => {
  console.log(fib(Number(n)));
  readline.close();
});
