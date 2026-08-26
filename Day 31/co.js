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
  const t = parseInt(input[idx++], 10);
  for (let tc = 0; tc < t; tc++) {
    const n = parseInt(input[idx++], 10);
    const a = input[idx++].split(' ').map(Number);
    a.sort((x, y) => x - y);
    let ok = true;
    for (let i = 1; i + 1 < n; i += 2) {
      if (a[i] !== a[i + 1]) {
        ok = false;
        break;
      }
    }

    console.log(ok ? 'YES' : 'NO');
  }
});