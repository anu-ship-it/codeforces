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
        const a = input[idx++].split(' ').map(Number);

        let hasEven = false;
        let hasOdd = false;

        for (const x of a) {
            if (x % 2 === 0) hasEven = true;
            else hasOdd = true;
            if (hasEven && hasOdd) break;
        }

        if (hasEven && hasOdd) {
            a.sort((x, y) => x - y);
        }

        console.log(a.join(' '));
    }
});