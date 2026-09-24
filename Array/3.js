// Find the 3 Largest number in the array

//function thirdLargest(arr) {
    // let unique = [...new Set(arr)];
    // unique.sort((a, b) => b - a);
    // return unique[2];
//}
//console.log(thirdLargest([10,5,8,29,15,20]))

// For DSA 
function thirdLargest(arr) {
    let first = -Infinity;
    let second =  -Infinity;
    let third = -Infinity;

    for (let num of arr) {
        if (num === first || num === second || num === third) {
            continue;
        }
        if (num > first) {
            third = second;
            second = first;
            first = num;
        }
        else if (num > second) {
            third = second;
            second = num;
        }
        else if (num > third) {
            third = num;
        }
    }
    return third;
}
console.log(thirdLargest([10,5,8,20,15,30,29]));