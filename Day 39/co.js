const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let ptr = 0;

const t = +input[ptr++];
const out = [];

for (let tc = 0; tc < t; tc++) {
    const n = +input[ptr++];
    const k = +input[ptr++];
    const s = input[ptr++];

    let ans = 0;
    let last = -1;              

    for (let i = 0; i < n; i++) {
        if (s[i] === '1') {
            
            if (last === -1 || i - last >= k) {
                ans++;
            }
            last = i;
        }
    }
    out.push(ans);
}

console.log(out.join('\n'));