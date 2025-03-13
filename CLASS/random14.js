console.log("Hello, World!");
//const prompt=require("prompt-sync")();
function sum() {
    let a = parseFloat(prompt("Enter first number:"));
    let b = parseFloat(prompt("Enter second number:"));
    alert(`Sum: ${a + b}`);
}

sum();