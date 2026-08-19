const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lines = [];
rl.on('line', (line) => {
  lines.push(line.trim());
}).on('close', () => {
  const t = parseInt(lines[0], 10);
  for (let i = 1; i <= t; i++) {
    const n = parseInt(lines[i], 10);
    if (n % 2 === 1) {
      console.log(0);
    } else {
      console.log(Math.floor(n / 4) + 1);
    }
  }
});
