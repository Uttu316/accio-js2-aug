const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (input) => {
  const [a, b] = input.split(" ").map(Number);
  //Write code here and print output

  readline.close();
});
