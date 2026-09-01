const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
let ptr = 0;
const t = input[ptr++];

const out = [];
for (let tc = 0; tc < t; tc++) {
    const n = input[ptr++];
    const freq = new Array(101).fill(0);
    for (let i = 0; i < n; i++) {
        const x = input[ptr++];
        if (x <= 100) freq[x]++;
    }
    let mex = 0;
    while (mex <= 100 && freq[mex] > 0) mex++;
    out.push(mex);
}
console.log(out.join('\n'));