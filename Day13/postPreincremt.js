// post increment: x++-> first use the variable and then increment it
// pre increment: ++x-> first increment variable and then use it

let x = 7;

let p = ++x + ++x + x++;
let q = ++x + x++ + ++x;

console.log(p, q, x);
