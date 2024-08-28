const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function encode(str, ans = "") {
  if (str === "") {
    // console.log(ans)
    return 1;
  }

  let curr = str[0];
  if (curr == "0") {
    return 0;
  }

  let rest = str.slice(1);
  let char = String.fromCharCode(Number(curr) + 96);
  let count = 0;
  count += encode(rest, ans + char);

  let twodigits = Number(str[0] + str[1]);

  if (twodigits <= 26) {
    let char = String.fromCharCode(twodigits + 96);
    let rest = str.slice(2);

    count += encode(rest, ans + char);
  }

  return count;
}
rl.question("", (str) => {
  console.log(encode(str));
  rl.close();
});
