/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let ans = -Infinity
    let curSum = 0;
    for (let i = 0; i < nums.length; i++) {
        curSum += nums[i];
        ans = Math.max(ans, curSum);
        if (curSum < 0) {
            curSum = 0
        }

    }
    return ans;
};