const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
let ptr = 0;

const t = input[ptr++];
const out = [];

for (let tc = 0; tc < t; tc++) {
    const n = input[ptr++];
    const a = input.slice(ptr, ptr + n);
    ptr += n;

    // total cost without removal
    let total = 0;
    for (let i = 0; i < n - 1; i++) {
        total += Math.abs(a[i] - a[i + 1]);
    }

    // maximum saving by removing at most one element
    let maxSave = 0;

    // remove first
    maxSave = Math.max(maxSave, Math.abs(a[0] - a[1]));

    // remove last
    maxSave = Math.max(maxSave, Math.abs(a[n - 2] - a[n - 1]));

    // remove an internal element a[i] (0-based, 1 <= i <= n-2)
    for (let i = 1; i <= n - 2; i++) {
        const save = Math.abs(a[i - 1] - a[i]) + Math.abs(a[i] - a[i + 1]) - Math.abs(a[i - 1] - a[i + 1]);
        maxSave = Math.max(maxSave, save);
    }

    out.push(total - maxSave);
}

console.log(out.join('\n'));
