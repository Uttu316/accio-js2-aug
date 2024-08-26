const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function digits(n) {
  if (n === 0) {
    return 0;
  }
  const digit = n % 10;

  return digit + digits(parseInt(n / 10));
}

readline.question("", (n) => {
  let result = digits(parseInt(n));
  console.log(result);
  readline.close();
});
