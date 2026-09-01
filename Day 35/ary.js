let search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        // Left half is sorted
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;   // target is in the sorted left half
            } else {
                left = mid + 1;    // target is in the right half
            }
        }
        // Right half is sorted
        else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;    // target is in the sorted right half
            } else {
                right = mid - 1;   // target is in the left half
            }
        }
    }

    return -1;
};