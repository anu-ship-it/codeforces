let fs = require("fs");
let input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let idx = 0;
let t = input[idx++];
let ans = [];

for (var i = 0; i < t; i++) {
    let x = input[idx++];
    let y = input[idx++];

    ans.push(x % y === 0 ? "YES" : "NO");
}

console.log(ans.join("\n"));
