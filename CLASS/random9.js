
//function declaration
function greet()
{
    console.log("Hello");
};

greet();


//function expressions
const add = function(a,b)
{
    return  a+b;
};
console.log(add(3,5));


//arrow function
const mul = (a,b) => a*b;
console.log(mul(3,4));

//callback function 
function num(n,callback)
{
    return callback(n);
};
const double = (n) => n*2;
const adder = (n) => n+2;
console.log(num(5,double));
console.log(num(5,adder));



//anonymous function
setTimeout(function()
{
    console.log("Anonymous function executed");
},1000);

//nested function
