const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
rl.on('line', (line) => lines.push(line.trim()));
rl.on('close', () => {
  const t = parseInt(lines[0], 10);
  let idx = 1;
  const results = [];

  for (let tc = 0; tc < t; tc++) {
    const n = parseInt(lines[idx++], 10);

    if (n === 2) {
      results.push('-1');
      continue;
    }

    if (n === 1) {
      results.push('1');
      continue;
    }
    const arr = [1n, 2n, 3n];
    let sum = 6n; 

    while (arr.length < n) {
      arr.push(sum);
      sum *= 2n; 
    }

    results.push(arr.join(' '));
  }

  console.log(results.join('\n'));
});