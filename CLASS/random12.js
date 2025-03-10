const p = require("prompt-sync")();
// Check for even or odd
let chec = p("Enter a number: ");
if(chec%2==0)
{
    console.log("Even");
}
else
{
    console.log("Odd");
}