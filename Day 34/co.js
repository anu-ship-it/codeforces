const solve = () => {
    const data = input.trim().split(/\s+/).map(Number);
    let idx = 0;
    const t = data[idx++];
    const results = [];
    for (let tc = 0; tc < t; tc++) {
        const n = data[idx++];
        const freq = new Map();
        for (let i = 0; i < n; i++) {
            const val = data[idx++];
            freq.set(val, (freq.get(val) || 0) + 1);
        }
        let deletions = 0;
        for (const [x, count] of freq.entries()) {
            if (x === 0) {
                deletions += count;
            } else if (count < x) {
                deletions += count;
            } else {
                deletions += count - x;
            }
        }
        results.push(deletions);
    }
    console.log(results.join('\n'));
};