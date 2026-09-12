function solve() {
  const data = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
  let idx = 0;
  const t = data[idx++];
  const results = [];
  for (let tc = 0; tc < t; tc++) {
    const n = data[idx++];
    let odd = 0, mod0 = 0, mod2 = 0;
    for (let i = 0; i < n; i++) {
      const x = data[idx++];
      const r = x % 4;
      if (r === 0) mod0++;
      else if (r === 2) mod2++;
      else odd++; // r === 1 or 3
    }
    results.push(Math.max(odd, mod0, mod2));
  }
  console.log(results.join('\n'));
}

solve();