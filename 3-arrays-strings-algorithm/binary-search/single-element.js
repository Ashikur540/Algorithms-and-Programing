/**
 * @param {number[]} nums
 * @return {number}
 * 
 * The array contains pairs of the same number and one unique number.
 * The goal is to find the single element using binary search.
 * Before the single element, pairs start at even indices.
 * After the single element, the pattern breaks, and pairs start at odd indices.
 */
var singleNonDuplicate = function (nums) {

    // Case 1: Only one element in the array
    if (nums.length === 1) return nums[0];

    // Case 2: First element is unique
    if (nums[0] !== nums[1]) return nums[0];

    // Case 3: Last element is unique
    if (nums[nums.length - 1] !== nums[nums.length - 2]) return nums[nums.length - 1];

    let lo = 0, hi = nums.length - 1;

    while (lo <= hi) {
        const mid = Math.floor((lo + hi) / 2);

        // If mid is the unique element (doesn’t match both neighbors)
        if (nums[mid] !== nums[mid + 1] && nums[mid] !== nums[mid - 1]) {
            return nums[mid];
        }

        // Case 1: mid is even
        if (mid % 2 === 0) {
            if (nums[mid] === nums[mid + 1]) {
                // Pair is (mid, mid+1) — valid pair
                // So rest will be odd length where 1 will be single at least — search area will be in the right (-->) (discard left half)
                lo = mid + 2;
            } else {
                // Pair is (mid-1, mid) — valid pair
                // So rest will be odd length where 1 will be single at least — search area will be in the left (<--) (discard right half)
                hi = mid - 2;
            }
        } 
        // Case 2: mid is odd
        else {
            if (nums[mid] === nums[mid - 1]) {
                // Pair is (mid-1, mid) — valid pair
                // So rest will be odd length where 1 will be single at least — search area will be in the right (-->) (discard left half)
                lo = mid + 1;
            } else {
                // Pair is (mid, mid+1) — valid pair
                // So rest will be odd length where 1 will be single at least — search area will be in the left (<--) (discard right half)
                hi = mid - 1;
            }
        }
    }
};
