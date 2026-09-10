// Write a function sumEvenNumbers(arr) that takes an array of numbers and returns the sum of all even numbers using a loop and a conditional.

function sumEvenNumbers(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] %2 === 0){
            sum += arr[i];
        }
    }
    return sum;
}
const num = [1, 2, 3, 4, 5, 6];
console.log(sumEvenNumbers(num));