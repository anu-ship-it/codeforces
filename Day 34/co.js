'use strict';

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
let idx = 0;

const t = input[idx++];
const out = [];

for (let tc = 0; tc < t; tc++) {
    const n = input[idx++];
    const cnt = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        const x = input[idx++];
        if (x >= 0 && x <= n) cnt[x]++;
    }

    let keep = 0;
    for (let x = 1; x <= n; x++) {
        if (cnt[x] >= x) keep += x;
    }

    out.push(n - keep);
}

console.log(out.join('\n'));