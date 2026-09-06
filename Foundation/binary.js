// Given an array of integers nums which is sortd in ascending order, and an integer target, write a function to search target in nums. if target exists, then return its index. Otherwise, return -1.
function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}
console.log(search([-1,0,3,5,9,12], 9)); 