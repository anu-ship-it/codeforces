const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

const t = Number(input[0]);
let ans = [];

for (let i = 1; i <= t; i++) {
    const s = input[i];

    let countY = 0;

    for (const ch of s) {
        if (ch === 'Y') {
            countY++;
        }
    }

    if (countY <= 1) {
        ans.push("YES");
    } else {
        ans.push("NO");
    }
}

console.log(ans.join("\n"));
