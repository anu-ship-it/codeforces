// Given two binary strings a and b, return their sum as a binary string.
let addBinary = function(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
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
