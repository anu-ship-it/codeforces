// Write a Program that defines a function to calculate the sum of two integers and prints the result. 
// Call this function by passing two integer values.

function sum(...args){
    return args.reduce((total, num) => total + num, 0);
}
console.log(sum(100, 200, 300, 400));


// Given an alphanumeric string s, return the second largest numerical digit that appears in a, or -1 if it does not exist.
// An alphanumeric string is a string consisting of lowercase English letters and digits.

let secondHighest = function(...s) {
    let max = -1;
    let secondMax = -1;
    for (const c of s) {
        if (c >= '0' && c <= '9') {
            const digit = c - '0';
            if (digit > max) {
                secondMax = max;
                max = digit;
            } else if (digit < max && digit > secondMax) {
                secondMax = digit;
            }
        }
    }
    return secondMax;
};
console.log(secondHighest(dfa12321afd));
