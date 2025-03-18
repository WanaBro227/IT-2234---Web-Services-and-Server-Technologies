/*
    a = [4, 5, 6, 3, 7]
    b = [8, 3, 2, 1, 5]
    Find the common elements between a and b
*/

let a = [4, 5, 6, 3, 7];
let b = [8, 3, 2, 1, 5];

let commonElements = [];
let commonElementsSize = 0;

for (let c = 0; c < a.length; c++) {
    for (let d = 0; d < b.length; d++) {
        if (a[c] == b[d]) {
            commonElements[commonElementsSize] = a[c];
            commonElementsSize++;
            break;
        }
    }
}

console.log("\nCommon elements between a and b: " + commonElements + "\n")