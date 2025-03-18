/*
    arr = [1, 2, 3, 4, 5, 6]
    target = 7
    Write a code find the all pair that sum up to the target
*/

let arr = [1, 2, 3, 4, 5, 6];
let target = 7;
let x = 1;

for (let a = 0; a < arr.length; a++) {
    for (let b = 0; b < arr.length; b++) {
        if (arr[a] + arr[b] == target) {
            console.log(
                x + ". " + arr[a] + ", " + arr[b]
            )
            x++;
        }
    }
}