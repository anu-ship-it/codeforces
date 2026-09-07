// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.


let permute = function(nums) {
    const result = [];
    
    function backtrack(path, used) {
        if (path.length === nums.length) {
            result.push([...path]); 
            return;
        }
        
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;          
            path.push(nums[i]);
            used[i] = true;
            backtrack(path, used);
            
            path.pop();
            used[i] = false;
        }
    }
    
    backtrack([], new Array(nums.length).fill(false));
    return result;
};
console.log(permute([1, 2, 3])); 