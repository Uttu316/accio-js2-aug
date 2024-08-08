const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (N) => {
  N = parseInt(N);

  switch (N) {
    case 55: {
      console.log("Study is important");
      break;
    }
    default: {
      console.log("No value");
    }
  }

  readline.close();
});
