const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function autori(s) {
  // Your code here
  let res = "";
  for (let ch of s) {
    if (ch >= "A" && ch <= "Z") {
      res += ch;
    }
  }

  return res;
}

readline.question("", (str) => {
  let result = autori(str);
  console.log(result);
  readline.close();
});
