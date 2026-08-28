let findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }
    const m = nums1.length;
    const n = nums2.length;
    const total = m + n;
    const half = Math.floor((total + 1) / 2);
    let left = 0, right = m;
    while (left <= right) {
        const i = Math.floor((left + right) / 2);
        const j = half - i;
        const nums1LeftMax = (i === 0) ? -Infinity : nums1[i - 1];
        const nums1RightMin = (i === m) ? Infinity : nums1[i];
        const nums2LeftMax = (j === 0) ? -Infinity : nums2[j - 1];
        const nums2RightMin = (j === n) ? Infinity : nums2[j];

        if (nums1LeftMax <= nums2RightMin && nums2LeftMax <= nums1RightMin) {
            if (total % 2 === 1) {
                return Math.max(nums1LeftMax, nums2LeftMax);
            } else {
                return (Math.max(nums1LeftMax, nums2LeftMax) + Math.min(nums1RightMin, nums2RightMin)) / 2;
            }
        } else if (nums1LeftMax > nums2RightMin) {
            right = i - 1;
        } else {
            left = i + 1;
        }
    }
    return 0;
};