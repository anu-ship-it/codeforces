const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let lines = [];
rl.on('line', line => lines.push(line.trim()));
rl.on('close', () => {
    let idx = 0;
    const T = parseInt(lines[idx++]);
    for (let t = 0; t < T; t++) {
        const n = parseInt(lines[idx++]);
        const a = lines[idx++].split(' ').map(Number);
        const x = parseInt(lines[idx++]);
        let mn = a[0], mx = a[0];
        for (let i = 1; i < n; i++) {
            if (a[i] < mn) mn = a[i];
            if (a[i] > mx) mx = a[i];
        }
        console.log(mn <= x && x <= mx ? 'YES' : 'NO');
    }
});
