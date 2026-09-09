// Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

let permuteUnique = function(nums){
    const freq = new Map();
    for (const num of nums) freq.set(num, (freq.get(num) || 0) + 1);
    const result = [];
    const path = [];
    const n = nums.length;
    function backtrack() {
        if (path.length === n) { result.push([...path]); return;}
        for (const [nums, count] of freq) {
            if (count === 0) continue;
            freq.set(nums, count - 1);
            path.push(nums);
            backtrack();
            path.pop();
            freq.set(nums, count);
        }
    }
    backtrack();
    return result;
};
console.log(permuteUnique([1, 1, 2])); 
