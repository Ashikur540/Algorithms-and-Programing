/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let count = 0;
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count += 1;
            console.log({ count })
        }
        else {
            // max = max > count ? max : count
            count = 0
            console.log({ max })
            console.log({ count })
        }
        max = max > count ? max : count
    }

    return max;
};

console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]))