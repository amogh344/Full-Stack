const p = require("prompt-sync")();
// Check for prime or not 
let chec = p("Enter a number: ");
if (chec < 2)
    {
        console.log(chec + " is not prime");
    }
    else
    {
        let isit = true;
        for (let i = 2; i < chec; i++) 
        {
            if (chec % i === 0) 
            {
                isit = false;
                break;
            }
        }
    if (isit) 
    {
        console.log(chec + "  prime");
    }
    else
    {
        console.log(chec + " not prime");
    }
}
