function solve() {
    const fs = require('fs');
    const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
    let ptr = 0;
    const t = +input[ptr++];

    const out = [];
    for (let tc = 0; tc < t; tc++) {
        const n = +input[ptr++];
        const s = input[ptr++];

        let g = 1;
        for (let i = 1; i < n; i++) {
            if (s[i] !== s[i - 1]) g++;
        }

        let canReduceBy2 = false;
        let canReduceBy1 = false;

        for (let i = 1; i < n - 1; i++) {
            if (s[i] !== s[i - 1] && s[i] !== s[i + 1]) {
                canReduceBy1 = true;
                if (s[i - 1] === s[i + 1]) {
                    canReduceBy2 = true;
                    break;              
                }
            }
        }

        if (canReduceBy2) out.push(g - 2);
        else if (canReduceBy1) out.push(g - 1);
        else out.push(g);
    }
    console.log(out.join('\n'));
}
solve();