let cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

console.log("The total number of cities:", cities.length);


cities.push("France");

console.log("The city added at the end is:", cities[cities.length - 1]);


cities.shift();
console.log("Cities after removing the first city:", cities);


console.log("The index of 'Los Angeles' is:", cities.indexOf("Los Angeles"));



