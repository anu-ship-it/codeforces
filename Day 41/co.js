const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let lines = [];
rl.on('line', line => lines.push(line.trim()));
rl.on('close', () => {
  let idx = 0;
  const t = parseInt(lines[idx++], 10);
  for (let tc = 0; tc < t; tc++) {
    const [n, m] = lines[idx++].split(' ').map(Number);
    const available = new Set();
    for (let i = 0; i < n; i++) {
      const w = lines[idx++];
      available.add(w[0].toUpperCase());
    }
    const abbrs = [];
    for (let i = 0; i < m; i++) {
      abbrs.push(lines[idx++]);
    }
    const pending = [...abbrs];
    let changed = true;
    while (changed && pending.length > 0) {
      changed = false;
      for (let i = 0; i < pending.length; i++) {
        const a = pending[i];
        let ok = true;
        const seen = new Set();
        for (const ch of a) {
          if (!seen.has(ch)) {
            seen.add(ch);
            if (!available.has(ch)) {
              ok = false;
              break;
            }
          }
        }
        if (ok) {
          available.add(a[0]);          
          pending.splice(i, 1);         
          changed = true;
          break;                        
        }
      }
    }
    console.log(pending.length === 0 ? 'YES' : 'NO');
  }
});