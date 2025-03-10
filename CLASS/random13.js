const p = require("prompt-sync")();
// Fibonacci
let chec = p("Enter a number: ");
let f = 0;
let s = 1;

for (let i = 0; i < chec; i++) {
    console.log(f + " ");
    let next = f + s;
    f = s;
    s = next;
}
