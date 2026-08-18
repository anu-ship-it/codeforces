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
    const n = parseInt(lines[idx++], 10);
    const a = lines[idx++].split(/\s+/).map(Number);

    const S = new Set(a);
    let d = S.size;

    // the answer is the smallest integer >= d that already belongs to S
    while (!S.has(d)) d++;
    console.log(d);
  }
});