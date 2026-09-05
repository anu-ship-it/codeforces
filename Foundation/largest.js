// Write a function that return the largest number in an array
function findLargestNumber(arr) {
    if (!Array.isArray(arr)) return false;
    if (arr.length === 0) return null;
    if (!arr.every(num => Number.isFinite(num))) return false;
    let largest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
console.log(findLargestNumber([1, 2, 3, 4, 5])); 