// You are given an integer array nums of length n and an integer target.
// Find three integers at distinct indices in nums such that the sums is closest to target.

function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);

  let closest = nums[0] + nums[1] + nums[2];
  const n = nums.length;

  for (let i = 0; i < n - 2; i++) {
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (Math.abs(sum - target) < Math.abs(closest - target)) {
        closest = sum;
      }

      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        return target;
      }
    }
  }

  return closest;
}