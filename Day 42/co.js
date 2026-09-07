const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
let idx = 0;
const t = input[idx++];

const out = [];
for (let i = 0; i < t; i++) {
    const x = input[idx++];
    const y = input[idx++];
    const z = input[idx++];
    if ((x & y) === (y & z) && (y & z) === (x & z)) {
        out.push('YES');
    } else {
        out.push('NO');
    }
}

console.log(out.join('\n'));
