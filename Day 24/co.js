const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let lines = [];
rl.on('line', (line) => lines.push(line.trim()));
rl.on('close', () => {
    let idx = 0;
    const t = parseInt(lines[idx++]);
    for (let tc = 0; tc < t; tc++) {
        const [n, k] = lines[idx++].split(' ').map(Number);
        const s = lines[idx++];
        let ans = 0;
        let last = -Infinity;          
        for (let i = 0; i < n; i++) {
            if (s[i] === '1') {
                last = i;                
            } else {
                if (i > last + k) {
                    ans++;
                }
            }
        }
        console.log(ans);
    }
});