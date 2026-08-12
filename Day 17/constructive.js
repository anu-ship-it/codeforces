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
  
  for (let test = 0; test < t; test++) {
    const n = parseInt(input[idx++]);
    const a = input[idx++].split(' ').map(Number);
    
    let ok = true;
    for (let i = 0; i < n - 1; i++) {
      if ((a[i] % 2) === (a[i + 1] % 2)) {
        ok = false;
        break;
      }
    }
    
    console.log(ok ? "YES" : "NO");
  }
});
