"use strict";

function isPrime(x) {
  if (x < 2) return false;
  if (x === 2 || x === 3) return true;
  if (x % 2 === 0 || x % 3 === 0) return false;
  for (let i = 5; i * i <= x; i += 6) {
    if (x % i === 0 || x % (i + 2) === 0) return false;
  }
  return true;
}

const t = parseInt(readline(), 10);
for (let i = 0; i < t; i++) {
  const n = parseInt(readline(), 10);
  print(isPrime(n + 1) ? "YES" : "NO");
}
