/*
    Reverse the array using push and pop
    a b c d -> d c b a
*/

let arr1 = ['a', 'b', 'c', 'd']
console.log("\nArray = " + arr1)
let arrLength = arr1.length;

let arr2 = []
for (let a = 0; a < arrLength; a++) {
    arr2.push(arr1.pop())
}

arr1 = arr2;
console.log("Rearranged array in reverse order = " + arr1 + "\n")

