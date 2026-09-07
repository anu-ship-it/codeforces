// You are given a 0-indexed array of intgers nums of length n. You are initially positioned at index 0.
// Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at index i, you can jump to any index(i + j) where:

let jump = function(nums) {
    const n = nums.length;
    if (n <= 1) return 0;
    let jumps = 0;
    let currEnd = 0;
    let farthest = 0;
    for (let i = 0; i < n - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);
        if (i === currEnd) {
            jumps++;
            currEnd = farthest;
            if (currEnd >= n - 1) break;
        }
    }
    return jumps;
};
console.log(jump([2,3,1,1,4])); 