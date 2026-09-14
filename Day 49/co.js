const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

let idx = 0;
const t = data[idx++];
const out = [];

for (let tc = 0; tc < t; tc++) {
    const n = data[idx++];
    const k = data[idx++];
    const m = data[idx++];
    if (n < k || m < k) {
        out.push("-1");
        continue;
    }
    const arr = new Array(n);
    for (let i = 0; i < k - 1; i++) {
        arr[i] = 1;
    }
    arr[k - 1] = m - k + 1;
    for (let i = k; i < n; i++) {
        arr[i] = 1;
    }

    out.push(arr.join(' '));
}

console.log(out.join('\n'));