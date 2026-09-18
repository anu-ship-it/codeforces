// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

let myAtoi = function(s) {
    let i = 0;
    let sign = 1;
    let result = 0;
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;
    while (i < s.length && s[i] === ' ') {
        i++;
    }
    if (i < s.length && s[i] === '-') {
        sign = -1;
        i++;
    } else if (i < s.length && s[i] === '+') {
        i++;
    }
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        let digit = s.charCodeAt(i) - 48;
        if (result > Math.floor((INT_MAX - digit) / 10)) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }

        result = result * 10 + digit;
        i++;
    }
    return result * sign;
};
