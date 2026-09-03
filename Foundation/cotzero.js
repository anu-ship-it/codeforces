// Write a function that returns the number of negative numbers in an array
function countNegativeNumbers(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0){
            count++;
        }
    }
    return count;
}
console.log(countNegativeNumbers([-1, 2, -3, 4, -5])); 
