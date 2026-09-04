// Given an array arr of numbers, return the smallest number in the array is empty, return null.

function findSamllest(arr) {
    if (!Array.isArray(arr)) return false;
    if (arr.length === 0 ) return null;

    if (!arr.every(num => Number.isFinite(num))) return false;

    let smallest = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}
console.log(findSamllest([3,1,2]));
