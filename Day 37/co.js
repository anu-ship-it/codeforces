const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  let idx = 0;
  const t = parseInt(input[idx++]);
  const out = [];
  for (let i = 0; i < t; i++) {
    const n = parseInt(input[idx++]);
    out.push(Math.floor((n - 1) / 2));
  }
  console.log(out.join('\n'));
});