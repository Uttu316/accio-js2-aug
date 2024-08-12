const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function shuffleString(arr, str) {
  let n = arr.length;
  let out = new Array(n);

  for (let i = 0; i < n; i++) {
    let chr = str[i];
    let pos = arr[i];

    out[pos] = chr;
  }
  console.log(out.join(""));
}

readline.question("", (n) => {
  readline.question("", (str) => {
    readline.question("", (arr) => {
      arr = arr.split(" ").map(Number);
      shuffleString(arr, str);
      readline.close();
    });
  });
});
