const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function SubString(str) {
  for (let i = 0; i < str.length; i++) {
    let sub = "";
    for (let j = i; j < str.length; j++) {
      sub += str[j];

      console.log(sub);
    }
  }
}

rl.on("line", (str) => {
  SubString(str);
  rl.close();
});
