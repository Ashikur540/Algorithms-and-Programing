
function findMatch(nums, lo, hi, target) {
    const mid = Math.floor((lo + hi) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) lo = mid + 1;
    else hi = mid - 1;
    return -1
}



var searchRange = function (nums, target) {

    if (nums.length === 0) return [-1, -1];

    let lo = 0, hi = nums.length - 1;
    while (lo <= hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (nums[mid] === target) {
            const leftMatchRes = findMatch(nums, lo, mid, target)
            const rightMatchRes = findMatch(nums, mid, nums.length - 1, target)
            const sIdx = leftMatchRes !== -1 ? leftMatchRes : mid;
            const rIdx = rightMatchRes !== -1 ? rightMatchRes : mid;
            return [sIdx, rIdx]

        }
        else if (nums[mid] < target) lo = mid + 1;
        else hi = mid - 1;
    }
    return [-1,-1];
};


console.log(searchRange([5,7,7,8,8,10], 6))