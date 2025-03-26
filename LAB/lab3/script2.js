const p = require("prompt-sync")();
let students = [];

function Student(name, grade, subjects) {
    this.name = name;
    this.grade = grade;
    this.subjects = subjects;
    this.isPass = grade >= 60;
}

let sn = parseInt(p("Enter the number of students to add: "));
for (let i = 0; i < sn; i++) {
    console.log(`\n--- Enter details for Student ${i + 1} ---`);
    let name = p("Enter the name of the student: ");
    let grade = parseInt(p("Enter the grade: "));
    let subjects = p("Enter the subjects: ").split(",");
    students.push(new Student(name, grade, subjects));
}

console.log("\n--- Student Details ---");
students.forEach((s, index) => {
    console.log(`\nStudent ${index + 1}:`);
    console.log("Name      :", s.name);
    console.log("Grade     :", s.grade);
    console.log("Subjects  :", s.subjects.join(", "));
    console.log("Result    :", s.isPass ? "PASS" : "FAIL");

});