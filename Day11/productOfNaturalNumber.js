const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function product(n, sum = 1) {
  // Write code here
  if (n === 0) {
    return sum;
  }

  return product(n - 1, sum * n);
}

readline.question("", (n) => {
  console.log(product(Number(n)));
  readline.close();
});
