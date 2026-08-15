"use strict";

function solve() {
  const t = parseInt(readline(), 10);
  for (let tc = 0; tc < t; tc++) {
    const n = parseInt(readline(), 10);
    const a = readline().split(" ").map(Number);

    let sum = 0;
    const freq = {};
    let maxF = 0;

    for (const x of a) {
      sum += x;
      freq[x] = (freq[x] || 0) + 1;
      if (freq[x] > maxF) maxF = freq[x];
    }

    const others = n - maxF;
    let ans;
    if (maxF <= others + 1) {
      ans = sum;                     // can play everything without any consecutive equal
    } else {
      ans = sum - (maxF - (others + 2)); // waste only the excess of the most frequent value
    }
    print(ans);
  }
}

solve();