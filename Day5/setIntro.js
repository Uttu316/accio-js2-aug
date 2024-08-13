let arr = ["a", "b", "r", "c", "r"];

let s = new Set(arr);
console.log(s);

s.add("a");

s.add("b");

s.add("c");

s.add("a");

let out = s.has("C");

s.add("ab");

s.add("a");

let arr2 = Array.from(s);
console.log(s, out, arr2);
