// You are given a string s of length n and an integer k.
// A cyclic rotation of s is obtained by choosing a prefix of s whose length is between 0 and n - 1 (inclusive), and moving it to the end of the string while preserving the order of all characters.

// For every cyclic rotation of s, let its score be the number of indices i such that 0 <= i < n - 1 and the characters at positions i and i + 1 are equal.

let countRotations = function(s, k) {
    const n = s.length;
    let ans = 0;
    for ( let i = 0; i < n; i++) {
        let score = 0;
        for (let j = 0; j < n -1; j++) {
            const c1 = s[(i + j) % n];
            const c2 = s[(i + j + 1) % n];
            if (c1 === c2) {
                score++;
            }
            if (score === k) ans++;
        }
    }
    return ans;
}
const s = "aabbaa";
const k = 2;
console.log(countRotations(s, k));