const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    const scores = line.trim().split(' ').map(Number); 
    
    const mn = Math.min(...scores);
    const mx = Math.max(...scores);
    
    if (mx - mn >= 10) {
        console.log('check again');
    } else {
        scores.sort((a, b) => a - b);
        console.log(`final ${scores[1]}`);
    }
});