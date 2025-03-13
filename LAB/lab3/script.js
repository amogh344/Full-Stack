/*Create an object student with properties: name (string), grade (number), subjects (array),
displayInfo() (method to log the student's details)
Write a script to dynamically add a passed property to the student object, with a value of true or false
based on their grade. Create a loop to log all keys and values of the student object.*/

const p = require("prompt-sync")();
let name;
let grade;
let subjects = [];

function student(name, grade, subjects) {
    this.name = name;
    this.grade = grade;
    this.subjects = subjects;
};

function enterDetails() {
    name = p("Enter the name of the student: ");
    grade = parseInt(p("Enter the grade: "));
    subjects = p("Enter the array of subjects: ").split(",");
};

function displayInfo() {
    let s = new student(name, grade, subjects);
    console.log("Name: " + s.name);
    console.log("Grade: " + s.grade);
    console.log("Subjects: " + s.subjects.join(", "));
};

enterDetails();
displayInfo();