//Simple interest

let p = require("prompt-sync")();
let amt = parseFloat(p("Enter the amount: "));
let rate = parseFloat(p("Enter the rate: "));
let tenure = parseFloat(p("Enter the tenure: "));

function si(amt,rate,tenure)
{
    return parseFloat((amt*rate*tenure)/100);
};

console.log(si());