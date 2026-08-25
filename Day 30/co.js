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
        const n = parseInt(lines[idx++]);
        const s = lines[idx++];
        const target = s[n - 1];
        let ans = 0;

        for (let i = 0; i < n - 1; i++) {
            if (s[i] !== target) ans++;
        }
        console.log(ans);
    }
});
