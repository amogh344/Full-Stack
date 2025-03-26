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
    let name = p("Enter the name of the student: ");
    let grade = parseInt(p("Enter the grade: "));
    let subjects = p("Enter the array of subjects: ").split(",");
    students.push(new Student(name, grade, subjects));
}

students.forEach(s => {
    console.log(`Name: ${s.name}\nGrade: ${s.grade}\nSubjects: ${s.subjects.join(", ")}\n${s.isPass ? "PASS" : "FAIL"}\n`);
});