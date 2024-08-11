const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (n) => {
  readline.question("", (str) => {
    toggleCase(n, str);
    readline.close();
  });
});

function toggleCase(n, str) {
  let out = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char >= "a" && char <= "z") {
      out += char.toUpperCase();
    } else {
      out += char.toLowerCase();
    }
  }
  console.log(out);
}
