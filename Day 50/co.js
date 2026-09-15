const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
let idx = 0;
const t = data[idx++];
const results = [];
for (let tc = 0; tc < t; tc++) {
    const n = data[idx++];
    const m = data[idx++];
    const a = data.slice(idx, idx + m);
    idx += m;
    let consec = true;
    for (let i = 1; i < m; i++) {
        if (a[i] !== a[i-1] + 1) {
            consec = false;
            break;
        }
    }
    let ans;
    if (consec) {
        ans = n - a[0] - m + 2;
        if (ans < 0) ans = 0; 
    } else {
        ans = 1;
    }
    results.push(ans);
}
console.log(results.join('\n'));