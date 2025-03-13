let s = prompt("Enter a string:");

document.write(s.length);
document.write("<br>");

let e = s.substring(0, 10);
document.write(e);
document.write("<br>");

let n = s.replace("JavaScript", "TypeScript");
document.write(n);
document.write("<br>");

let chec=prompt("Enter for checking palindrome: ")
function p(chec) {
    return chec === chec.split('').reverse().join('');
}
document.write("<br>");
document.write(p(chec) ? "Palindrome" : "Not a palindrome");