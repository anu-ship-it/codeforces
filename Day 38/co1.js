function solve() {
    const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
    const t = parseInt(input[0]);

    for (let i = 1; i <= t; i++) {
        const n = parseInt(input[i]);
        console.log(2 * n - 2);
    }
}

solve();
