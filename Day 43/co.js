const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lines = [];
rl.on('line', (line) => lines.push(line.trim()));
rl.on('close', () => {
  let idx = 0;
  const t = parseInt(lines[idx++]);

  for (let tc = 0; tc < t; tc++) {
    const n = parseInt(lines[idx++]);
    const b = lines[idx++].split(' ').map(Number);

    const unique = new Set(b);
    console.log(unique.size);
  }
});