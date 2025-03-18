console.log("Arrays.... -->")

let num1 = [1, 2, 3, 4, 5, 6, 7];

// console.log(num1);
console.log();

// Printing the elements in the array using for loop
console.log("Using for loop ->");
for (let a = 0; a < num1.length; a++) {
    console.log(num1[a]);
}
console.log();

// Printing the element sin the array using foreach loop
console.log("Using foreach loop ->");
num1.forEach((n) => {
    console.log(n)
});
console.log();

// Nested array
console.log("Nested Array ->");
console.log("\tFrom method 1->");
let num2 = [[1, 2, 30], [5, 6], [8, 5, 3]];

num2.forEach((a) => {
    console.log("\t" + a);
})
console.log();

console.log("\tFrom method 2->");
num2.forEach((a) => {
    a.forEach((b) => {
        console.log("\t" + b);
    })
})
console.log();

// Array operations
console.log("Array Operataion ->");

// Push and Pop
console.log("Push and Pop methods")
arr3 = ['a', 'b', 'd']
console.log(arr3)

arr3.push('e');
console.log(arr3)

arr3.pop()
console.log(arr3)
console.log();

// JSON
// {key : value}
console.log("JSON ->")
let student = {regno: "2021/ICT/34", name: "Chamara", age: 24, course: "IT"}
console.log(student);
console.log(student.name)
console.log();

let students = [
    {regno: "2021/ICT/34", name: "Chamara", age: 24, course: "IT"},
    {regno: "2021/ICT/36", name: "Kosala", age: 23, course: "IT"},
    {regno: "2021/ICT/46", name: "Malindu", age: 24, course: "IT"},
    {regno: "2021/ICT/120", name: "Raveen", age: 23, course: "IT"}
]
console.log(students)