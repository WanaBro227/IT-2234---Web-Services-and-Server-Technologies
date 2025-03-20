/*
    Exercise 01
    Define 10 students JSON
    store it in an array
    find the female students
    find the students who are following IT course
    find the max and average GPA among the students
*/

let students = [
    {regno: "2021/ICT/34", sex: "Male", course: "IT", gpa: 3.41},
    {regno: "2021/ICT/35", sex: "Female", course: "IT", gpa: 3.7},
    {regno: "2021/ICT/36", sex: "Male", course: "IT", gpa: 3.28},
    {regno: "2021/ASB/37", sex: "Female", course: "ASB", gpa: 2.123},
    {regno: "2021/ASP/38", sex: "Male", course: "ASP", gpa: 3.21},
    {regno: "2021/ICT/39", sex: "Male", course: "IT", gpa: 2.91},
    {regno: "2021/ASB/40", sex: "Female", course: "ASB", gpa: 3.01},
    {regno: "2021/ASP/41", sex: "Male", course: "ASP", gpa: 2.41},
    {regno: "2021/ICT/42", sex: "Female", course: "IT", gpa: 2.821},
    {regno: "2021/ICT/43", sex: "Female", course: "IT", gpa: 2.456}
]

console.log("\nFemale Students->")
for (let a = 0; a < students.length; a++) {
    if (students[a].sex == "Female") {
        console.log(students[a])
    }
}

console.log("\nIT Students ->")
for (let a = 0; a < students.length; a++) {
    if (students[a].course == "IT") {
        console.log(students[a])
    }
}

let student = students[0];

for (let a = 0; a < students.length; a++) {
    if (student.gpa < students[a].gpa) {
        student = students[a];
    }
}

console.log("\nThe Student with maximum GPA:")
console.log(student)

let gpa = 0;
for (let a = 0; a < students.length; a++) {
    gpa = gpa + students[a].gpa
}
let avg = gpa / students.length
console.log("\nAverage GPA of a Students: " + avg)