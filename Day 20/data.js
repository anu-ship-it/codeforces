"use strict";

function solve() {
  const t = parseInt(readline(), 10);
  for (let tc = 0; tc < t; tc++) {
    const n = parseInt(readline(), 10);
    const a = readline().split(" ").map(Number);
    const freq = {};
    for (const x of a) {
      freq[x] = (freq[x] || 0) + 1;
    }
    let heap = [];
    for (const d in freq) {
      heap.push([parseInt(d, 10), freq[d]]);
    }
    heap.sort((p, q) => q[0] - p[0]); 
    let sum = 0;
    let prev = -1;
    const used = []; 
    while (true) {
      let idx = -1;
      for (let i = 0; i < heap.length; i++) {
        if (heap[i][1] > 0 && heap[i][0] !== prev) {
          idx = i;
          break;
        }
      }
      if (idx === -1) break; 
      const d = heap[idx][0];
      heap[idx][1]--;
      sum += d;
      prev = d;
      used.push(d);
      heap.sort((p, q) => q[0] - p[0]);
    }
    if (used.length > 0) {
      const last = used[used.length - 1];
      for (let i = 0; i < heap.length; i++) {
        if (heap[i][0] === last && heap[i][1] > 0) {
          sum += last;
          break;
        }
      }
    }

    print(sum);
  }
}

solve();