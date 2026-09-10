// Write a recursive function isPowerOfTwo(n) that returns true if n is a power of 2, otherwise false.

function isPowerOfTwo(n) {
    if (n === 1) return true;
    if (n < 1 || n % 2 !== 0) return false;
    return isPowerOfTwo(n / 2);
};
