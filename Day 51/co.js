const fs = require('fs');
const data = fs.readFileSync(0, 'utf-8').trim().split(/\s+/);
let idx = 0;
const t = parseInt(data[idx++]);
const out = [];

for (let tc = 0; tc < t; tc++) {
    const n = parseInt(data[idx++]);
    const m = parseInt(data[idx++]);

    const freq = new Array(m + 2).fill(0);
    for (let i = 0; i < n; i++) {
        const a = parseInt(data[idx++]);
        freq[a]++;
    }

    let suffix = 0;
    let ans = 0;

    for (let L = m; L >= 1; L--) {
        suffix += freq[L];           

        let candidate = suffix;       
        const dbl = 2 * L;
        if (dbl <= m) {
            candidate += freq[dbl];   
        }

        if (candidate > ans) ans = candidate;
    }

    out.push(ans);
}

console.log(out.join('\n'));