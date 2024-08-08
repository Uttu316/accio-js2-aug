const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (input) => {
  const [a, b] = input.split(" ").map(Number);
  switchCase3(a, b);
  readline.close();
});

function switchCase3(a, b) {
  // Write your code here

  const output = a % b;

  switch (output) {
    case 0: {
      console.log("Remainder is too small");
      break;
    }
    case 1: {
      console.log("Remainder is small");
      break;
    }
    case 2: {
      console.log("Remainder is large");
      break;
    }
    default: {
      console.log("Remainder is too large");
    }
  }
}
