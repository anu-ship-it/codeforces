const fs = require("fs").readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let idx = 0;
const t = fs[idx++];
let ans = [];

for (let tc = 0; tc < t; tc++) {
    const k = fs[idx++];
    let cntTwo = 0;
    let mx = 0;

    for (let i = 0; i < k; i++) {
        const x = fs[idx++];
        mx = Math.max(mx, x);
        if (x >= 2) cntTwo++;
    }

    ans.push(mx >= 3 || cntTwo >= 2 ? "YES" : "NO");
}

console.log(ans.join("\n"));
