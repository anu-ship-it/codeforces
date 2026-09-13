// You are given an integer array nums.
// An integer x is called special if:
// x appears exactly three times in nums.
// All three occurrences of x are equally spaced in nums. In other words, if all occurrences of x are at indices i1 < i2 < i3, then i2 - i1 = i3 - i2.
// Return the number of distinct special integers in nums.

function countSpecialIntegers(nums) {
  const positions = new Map();
  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    if (!positions.has(x)) {
      positions.set(x, []);
    }
    positions.get(x).push(i);
  }

  let count = 0;
  for (const indices of positions.values()) {
    if (indices.length === 3) {
      const [i1, i2, i3] = indices;
      if (i2 - i1 === i3 - i2) {
        count++;
      }
    }
  }

  return count;
}
