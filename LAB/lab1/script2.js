//const prompt = require("prompt-sync")();
let cities =['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

function addCity(){
    let a = prompt("Enter city to push");
    cities.push(a);
};

function removeCity(){
    let a = prompt("Enter city to remove");
    cities.shift(a);
};

addCity();
removeCity();

document.write("Cities: ",cities);

document.write("\nNumber of cities: "+cities.length);