const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (N) => {
  // console.log(typeof N)
  //Write code here and print output here
  const n = Number(N);
  switch (n) {
    case 12: {
      console.log("I am even");
      break;
    }
    case 13: {
      console.log("I am prime");
      break;
    }
    case 25: {
      console.log("I am odd");
      break;
    }
    default: {
      console.log("I am just a number");
    }
  }
  rl.close();
});
