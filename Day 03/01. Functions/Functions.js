// Functions -->>
// Void type function
function printMsg() {
    console.log("\nHello Chamara...!\n")
}
printMsg()

// Return type function
function sum() {
    return 5 + 6
}
console.log("Sum of 5 and 6 = " + sum() + "\n")

// Funtions with parameters
function sub(a, b) {
    return a - b
}
console.log("6 - 5 = " + sub(6, 5) + "\n")

// Arrow function
/*
function printMsg() {
    console.log("\nHello Chamara...!\n")
}
*/
const msg = ()=> {console.log("Hello Chamara...!\n")}
msg()

// Function with default parameter
const multiply = (num1, num2 = 2) => {
    return num1 * num2
}
console.log("Multiplication of 5 and 4 = " + multiply(5, 4))
console.log("Multiplication of 8 and 2 = " + multiply(8) + "\n")

// Function with rest parameter

const mySum1 = (...n) => {
    let sum = 0

    for (let a of n) {
        sum += a
    }

    return sum
}
// Using n.forEach((a) => sum += a)
console.log("Using foreach loop")
console.log("Sum of 4, 5, 8, 7, 2, 9, 10 is = " + mySum1(4, 5, 8, 7, 2, 9, 10) + "\n")

const mySum2 = (...n) => {
    let sum = 0
    n.forEach((a) => sum += a)
    return sum
}
// Using n.forEach((a) => sum += a)
console.log("Using n.forEach((a) => sum += a)")
console.log("Sum of 4, 5, 8, 7, 2, 9, 10 is = " + mySum2(4, 5, 8, 7, 2, 9, 10) + "\n")

const mySum3 = (...n) => {
    return n.reduce((sum, a) => sum += a)
}
// Using n.reduce((sum, a) => sum += a)
console.log("Using n.reduce((sum, a) => sum += a)")
console.log("Sum of 4, 5, 8, 7, 2, 9, 10 is = " + mySum3(4, 5, 8, 7, 2, 9, 10) + "\n")

// Callback funtion (a function passed as an argument)
const greet = (msg, fun) => {
    console.log("Hi...." + msg)
    fun()
}

greet("Good Morning..!", ()=> {console.log("My name is Chamara")})

const multwo = (n) => n * 3

const myArr = (mul, ...n) => {
    n.foreach((a) => console.log(mul(a)))
}