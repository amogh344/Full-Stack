const prompt = require("prompt-sync")();
let inp = prompt("Enter string: ");
console.log("String entered by user is :"+inp);
console.log("<br>");
console.log("substring:"+inp.substring(5));
console.log("<br>");
console.log("Replaceing \"Javascript\" with \"Typescript\": "+inp.replace("Javascript","Typescript"));

let pal=[];
pal = prompt("Enter string: ");

/*function isPal(str){ 
    let rev = pal.reverse();
    if(pal)
}
if(isPal(pal) === 1)
{
    console.log("Palindrome");
}
else
{
    console.log("Not palindrome");
}*/
let rev=pal.reverse;
/*for(let i=pal.length;i>=0;i--)
{

}*/
if(pal === rev)
{
    console.log("Palindrome");
}
else
{
    console.log("Not Palindrome");
}