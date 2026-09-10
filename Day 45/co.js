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
    const t = parseInt(input[idx++]);

    for (let test = 0; test < t; test++) {
        const n = parseInt(input[idx++]);
        const arr = input[idx++].split(' ').map(Number);
        const distinct = new Set(arr);
        console.log(distinct.size * 2 - 1);
    }
});