const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = [];
rl.on('line', (line) => input.push(line.trim()));
rl.on('close', () => {
    let idx = 0;
    const t = parseInt(input[idx++]);
    for (let tc = 0; tc < t; tc++) {
        const [n, m] = input[idx++].split(' ').map(Number);
        const a = input[idx++].split(' ').map(Number);
        const b = input[idx++].split(' ').map(Number);
        const beaLife = a[0] + n - 1;
        const verLife = b[0] + m - 1;
        console.log(beaLife >= verLife ? 1 : 2);
    }
});
