const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let t;

rl.on("line", (line) => {
  if (!t) {
    t = parseInt(line);
    return;
  }
  console.log(camelCase(line));
  t--;
  if (t === 0) {
    rl.close();
  }
});

function camelCase(str) {
  let out = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char === "_") {
      out += str[i + 1].toUpperCase();
      i++;
    } else {
      out += char;
    }
  }
  return out;
}
