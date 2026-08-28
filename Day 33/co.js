function solve() {
    const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
    let idx = 0;
    const t = parseInt(input[idx++]);

    const results = [];
    for (let i = 0; i < t; i++) {
        const n = parseInt(input[idx++]);
        const arr = input[idx++].split(' ').map(Number);
        results.push(Math.max(...arr));
    }

    console.log(results.join('\n'));
}

solve();