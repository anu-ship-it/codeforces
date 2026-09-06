// You are given a strictly increasing integer array position, where position[i] is the initial position of the ith robot at time t = 0.
// You are also given an integer array speed, where speed[i] is the constant speed of the ith robot in units per second, and an integer distance.
// Time is continuous and measured in seconds. A robot or group with speed v moves v * t units to the right over any interval of t seconds.
// Whenever the distance between two robots or groups becomes at most distance, they merge into a single group.
// If multiple robots or groups satisfy the merging condition at the same time, all merges happen simultaneously. In particular, every connected collection of robots or groups whose consecutive positions differ by at most distance merges into one group.
// After a merge, the resulting group takes the current position and speed of the rightmost robot in that group. Once merged, robots never separate.
// Return the number of groups remaining after all possible merges have occurred.

let countGroups = function (position, speed, distance) {
  const n = position.length;
  let ans = 1;
  let minSpeed = speed[n - 1];

  for (let i = n - 2; i >= 0; i--) {
    if (position[i + 1] - position[i] <= distance) continue;

    if (speed[i] <= minSpeed) ans++;
    minSpeed = Math.min(minSpeed, speed[i]);
  }

  return ans;
};
console.log(countGroups([1, 5, 6, 20], [4, 3, 2, 3], 1)); 