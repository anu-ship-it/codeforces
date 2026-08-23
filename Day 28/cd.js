const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = [];
rl.on('line', (line) => {
    input.push(line.trim());
});
rl.on('close', () => {
    let idx = 0;
    const q = parseInt(input[idx++]);
    for (let test = 0; test < q; test++) {
        const n = parseInt(input[idx++]); 
        const [s, t] = input[idx++].split(' ');
        const cnt1 = new Array(26).fill(0);
        for (const ch of s) {
            cnt1[ch.charCodeAt(0) - 97]++;
        }
        const cnt2 = new Array(26).fill(0);
        for (const ch of t) {
            cnt2[ch.charCodeAt(0) - 97]++;
        }
        let ok = true;
        for (let i = 0; i < 26; i++) {
            if (cnt1[i] !== cnt2[i]) {
                ok = false;
                break;
            }
        }
        console.log(ok ? 'YES' : 'NO');
    }
});
