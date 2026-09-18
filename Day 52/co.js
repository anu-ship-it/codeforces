const fs = require('fs');

function main() {
    const input = fs.readFileSync(0, 'utf-8').trim().split(/\s+/);
    if (input.length === 0 || input[0] === '') return;

    let t = parseInt(input[0], 10);
    let index = 1;

    for (let i = 0; i < t; i++) {
        let n = parseInt(input[index++], 10);
        let res = 0;
        for (let b = 1; b <= n; b++) {
            let multiples = Math.floor(n / b);
            res += multiples * multiples;
        }

        console.log(res);
    }
}
main();