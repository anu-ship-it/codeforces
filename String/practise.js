// In a valid Roman numeral, a smaller value before a larger value means subtraction; otherwise it means addition.

function romanToInt(roman) {
  const map = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000 };
  let total = 0;
  for (let i = 0; i < roman.length; i++) {
    const current = map[roman[i]];
    const next = map[roman[i + 1]] ?? 0;
    total += current < next ? -current : current;
  }
  return total;
}
