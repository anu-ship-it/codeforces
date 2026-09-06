// You are given an integer array nums of even length n.
// A cyclic rotation of nums is obtained by choosing a prefix of nums whose length is between 0 and n - 1 (inclusive), and moving it to the end of the array while preserving the order of all elements.
// A cyclic rotation is good if the sum of its first n / 2 elements is strictly greater than the sum of its last n / 2 elements.
// Return the number of cyclic rotations of nums that are good.

let countGoodRotations = function(nums) {
    const n = nums.length;
    const half = n / 2;
    let total = 0;
    for (const x of nums) total += x;
    let window = 0;
    for (let i = 0; i < half; i++) window += nums[i];

    let answer = 0;
    if (2 * window > total) answer++;
    for (let i = 0; i < n - 1; i++) {
        window -= nums[i];
        window += nums[(i + half) % n];
        if (2 * window > total) answer++;
    }
    return answer;
};