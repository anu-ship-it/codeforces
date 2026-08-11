// Given two binary strings a and b, return their sum as a binary string.
let addBinary = function(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    const result = [];
    while (i >= 0 || j >= 0 || carry > 0) {
        let sum = carry;
        if (i >= 0) {
            sum += a[i] === '1' ? 1 : 0;
            i--;
        }
        if (j >= 0) {
            sum += b[j] === '1' ? 1 : 0;
            j--;
        }
        result.push(sum % 2);
        carry = Math.floor(sum / 2);
    }
    return result.reverse().join('');
};
console.log(addBinary("11", "1"));


// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. 
// The returned integer should be non-negative as well.


let mySqrt = function(x) {
    if (x < 2) return x;
    let left = 1;
    let right = x;
    while (left < right) {
        const mid = Math.floor((left + right + 1) / 2);
        if (mid > x / mid) {
            right = mid - 1;
        } else {
            left = mid;
        }
    }
    return left;
};

console.log(mySqrt(9));


// Given a non-negative integer x, return the square root of x rounded down 
// to the nearest integer (i.e. the integer part of √x). You must not use any built-in exponent function or operator (Math.sqrt, ** 0.5, etc.).

let climbStairs = function(n) {
    let a = 1, b = 1;
    for (let i = 0; i < n; i++) {
        [a, b] = [b, a + b];
    }
    return a;
};
console.log(climbStairs(3));

