/*
    [4, 8, 3, 4, 3, 2, 1, 8, 4]
    Find the most frequent element in the array
*/

let arr = [4, 8, 3, 4, 3, 2, 1, 8, 4];
let frequency = {};
let maxCount = 0;
let mostFrequent;
    
arr.forEach(num => {
    frequency[num] = (frequency[num] || 0) + 1;
    if (frequency[num] > maxCount) {
        maxCount = frequency[num];
        mostFrequent = num;
        }
});

console.log(mostFrequent)