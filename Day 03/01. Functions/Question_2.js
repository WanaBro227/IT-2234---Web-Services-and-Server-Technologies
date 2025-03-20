// Write a recursive function to print numbers from 1 to n

function printNum(n, a = 1) {
    if (a == n) {
        console.log(a)
    } else {
        console.log(a)
        printNum(n, a+1)
    }
}

printNum(10)