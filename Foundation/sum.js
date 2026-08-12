// Write a Program that defines a function to calculate the sum of two integers and prints the result. 
// Call this function by passing two integer values.

function sum(...args){
    return args.reduce((total, num) => total + num, 0);
}
console.log(sum(100, 200, 300, 400));
