const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function timeConversion(str) {
  let hr = str.slice(0, 2);

  let isPM = str.includes("PM");

  let newHr = "";
  if (isPM && hr === "12") {
    newHr = hr;
  } else if (isPM && hr !== "12") {
    newHr = parseInt(hr) + 12;
  } else if (!isPM && hr === "12") {
    newHr = "00";
  } else {
    newHr = hr;
  }

  let rest = str.slice(2, -2);

  console.log(newHr + rest);
}

readline.question("", (s) => {
  timeConversion(s);
  readline.close();
});
