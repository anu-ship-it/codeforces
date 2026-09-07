// Given an array of integers nums, sort the array in ascending order and return it.
// You must solve the problem without using any built-in functions in O(n log(n)) time complexity and with the smallest space complexity possible.

let sortArray = function(nums) {
    if (nums.length <= 1) return nums;
    let mid = Math.floor(nums.length / 2);
    let left = sortArray(nums.slice(0, mid));
    let right = sortArray(nums.slice(mid));
    return merge(left, right);
};
function merge(left, right) {
    let res = [], i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            res.push(left[i++]);
        } else {
            res.push(right[j++]);
        }
    }
    return [...res, ...left.slice(i), ...right.slice(j)];
}
const nums = [5, 2, 3, 1];
console.log(sortArray(nums)); 
