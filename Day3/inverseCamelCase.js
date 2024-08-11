const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (str) => {
  solution(str);

  rl.close();
});

function solution(str) {
  let checkpoint = 0;
  for (let i = 1; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      let word = str.slice(checkpoint, i);
      console.log(word);
      checkpoint = i;
    }
  }
  console.log(str.slice(checkpoint));
}
