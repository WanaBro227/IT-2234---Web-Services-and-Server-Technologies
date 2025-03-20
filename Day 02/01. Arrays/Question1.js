// Find the maximum number in a array using foreaxh loop

let num = [2, 4, 3, 8, 9, 6, 10, 1];

let max = num[0];

num.forEach((a) => {
    // if (a > max) {
    //     max = a;
    // }
    (max < a) && (max = a)
})
console.log("Maximum number is = " + max);