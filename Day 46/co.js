// Partition the fields: Divide the n fields into n / k farms, each consisting of k consecutive fields.

function solve() {
    const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
    let idx = 0;
    const t = parseInt(input[idx++]);
    const results = [];

    for (let test = 0; test < t; test++) {
        const [n, k] = input[idx++].split(' ').map(Number);
        const s = input[idx++].trim();
        let ans = 0;
        const numFarms = n / k;

        for (let farm = 0; farm < numFarms; farm++) {
            let hasFarmerJohnField = false;
            const start = farm * k;

            for(let j = start; j < start + k; j++) {
                if (s[j] === '0') {
                    hasFarmerJohnField = true;
                    break;
                }
            }
            if (!hasFarmerJohnField) {
                ans++;
            }

        }
        results.push(ans);
    }
    console.log(results.join('\n'));
}
solve();
