const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lines = [];
rl.on('line', (line) => {
  lines.push(line.trim());
});

rl.on('close', () => {
  let t = parseInt(lines[0]);
  for (let i = 1; i <= t; i++) {
    let [a, b, c, d] = lines[i].split(' ').map(Number);
    
    // All four must be equal
    if (a === b && b === c && c === d) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }
});