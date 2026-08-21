const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lines = [];
rl.on('line', (line) => lines.push(line.trim()));
rl.on('close', () => {
  let idx = 0;
  const t = parseInt(lines[idx++], 10);

  for (let test = 0; test < t; test++) {
    const n = parseInt(lines[idx++], 10);
    console.log(maxCost(n));
  }
});

/**
 * @param {number} n
 * @return {number}
 */
function maxCost(n) {
  let max = 0;

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      const val = r * n + (c + 1);
      let cost = val;

      if (r > 0) cost += (r - 1) * n + (c + 1);
      if (r < n - 1) cost += (r + 1) * n + (c + 1);
      if (c > 0) cost += r * n + c;
      if (c < n - 1) cost += r * n + (c + 2);

      if (cost > max) max = cost;
    }
  }
  return max;
}