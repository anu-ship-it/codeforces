const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let idx = 0;
const t = input[idx++];

function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

let answer = [];

for (let tc = 0; tc < t; tc++) {
    const n = input[idx++];

    let first = input[idx];
    let last;

    for (let i = 0; i < n; i++) {
        last = input[idx++];
    }

    answer.push(gcd(first, last));
}

console.log(answer.join("\n"));