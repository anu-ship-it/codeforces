const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split(/\s+/);
let index = 0;
const t = Number(input[index++]);
const result = [];
for (let tc = 0; tc < t; tc++) {
    const n = Number(input[index++]);
    const a = [];
    for (let i = 0; i < n; i++) {
        a.push(Number(input[index++]));
    }
    let maxPrevious = a[0];
    let answer = 0;
    for (let i = 1; i < n; i++) {
        if (a[i] < maxPrevious) {
            answer++;
        } else {
            maxPrevious = a[i];
        }
    }
    result.push(answer);
}
console.log(result.join("\n"));