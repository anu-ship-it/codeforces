// Given a non-empty array of integers nums, every elements appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use constant extra space.

let singleNumber = function(...nums) {
    let result = 0;
    for (let num of nums){
        result ^= num;
    }
    return result;
};
console.log(singleNumber(2,2,1));
