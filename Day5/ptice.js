const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ptice(n, str) {
  let adrian = "ABC";
  let bruno = "BABC";
  let goran = "CCAABB";

  let a = 0,
    b = 0,
    g = 0;

  for (let i = 0; i < str.length; i++) {
    let correct = str[i];

    if (adrian[i % 3] === correct) {
      a++;
    }
    if (bruno[i % 4] === correct) {
      b++;
    }
    if (goran[i % 6] === correct) {
      g++;
    }
  }

  let marks = Math.max(a, b, g);
  console.log(marks);

  if (marks === a) {
    console.log("Adrian");
  }
  if (marks === b) {
    console.log("Bruno");
  }
  if (marks === g) {
    console.log("Goran");
  }
}

readline.question("", (n) => {
  readline.question("", (key) => {
    ptice(parseInt(n), key);
    readline.close();
  });
});
