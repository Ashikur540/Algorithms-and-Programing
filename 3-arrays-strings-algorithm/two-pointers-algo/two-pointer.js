

// 1. Find the closest pair from two sorted arrays and return the pair

/*

Input: ar1 = [1, 4, 5, 7];
       ar2 = [10, 20, 30, 40];
     x = 32
Output:  1 and 30

Input:  arr1[] = [1, 4, 5, 7];
            arr2[] = [10, 20, 30, 40];
            x = 50      
Output:  7 and 40


*/

function findClosestPair(arr1, arr2, target) {
    let leftP = 0, rightP = arr2.length - 1, minDiff = Number.MAX_VALUE;
    let n1, n2;
    //  looping arr1 from left to right and arr2 from right to left
    while (leftP < arr1.length && rightP >= 0) {
        const sum = arr1[leftP] + arr2[rightP]
        //  comparing the sum with the target and updating the minDiff because less difference means its closer to the target
        if (Math.abs(sum - target) < minDiff) {
            minDiff = Math.abs(sum - target)
            n1 = arr1[leftP]
            n2 = arr2[rightP]
        }
        //  forward moving the left pointer to increase the sum
        else if (sum < target) {
            leftP++
        }
        else rightP--
    }
    return [n1, n2]

}
/*  
  NOTE:  Time Complexity: O(n + m) where n is the length of arr1 and m is the length of arr2  while traversing each array independently, not nested
  Space Complexity: O(1)

*/



function intersect(nums1, nums2) {
    nums1.sort((a, b) => a - b);  // Sort nums1
    nums2.sort((a, b) => a - b);  // Sort nums2

    let leftP = 0, rightP = 0;
    let res = [];

    while (leftP < nums1.length && rightP < nums2.length) {
        if (nums1[leftP] === nums2[rightP]) {
            res.push(nums1[leftP]);
            leftP++;
            rightP++;
        } else if (nums1[leftP] < nums2[rightP]) {
            leftP++;  // Move left pointer to find a match
        } else {
            rightP++;  // Move right pointer to find a match
        }
    }

    return res;
}



const nums1 = [1, 2, 2, 1], nums2 = [2, 2]

console.log(intersect(nums1, nums2))




// LeetCode: 344. Reverse String

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let i = 0, j = s.length - 1;
    while (i < j) {
      // ES6 destructuring assignment
      [s[i], s[j]] = [s[j], s[i]];
      i++;
      j--;
    }
  };


//   88. Merge Sorted Array

  var merge = function (nums1, m, nums2, n) {
    let i = m - 1; // last index of nums1 (POINTER1)
    let j = n - 1; // last index of nums2 (POINTER2)
    let k = m + n - 1; // modified mus1 but starting from last index

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            // place bigger number to the last index of modified nums1 and move the pointer backward accordingly 
            // here the assignment happens first then decrement happens means 
            /*
            nums1[k]=nums1[i];
            K--;
            i--;
            */
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }
};


 
// leetCode  283. Move Zeroes

function moveZeroes(nums) {
    let nonZeroNumPos = 0
    let lastPos = nums.length - 1
    //   first put non zero nums to the first indexs of the array
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            console.log(nums[i])
            nums[nonZeroNumPos++] = nums[i]
        }
    }
    //    after placing all non zero nums then keep the rest indexes as zero which start form the nonZeroNumPos
    while (nonZeroNumPos < nums.length) {
        nums[nonZeroNumPos++] = 0
    }

};



/** leetCode
977. Squares of a Sorted Array
 */
var sortedSquares = function(nums) {
    const n = nums.length;
    const result = new Array(n);
    let left = 0; // Pointer at the start
    let right = n - 1; // Pointer at the end
    let position = n - 1; // Position to fill in result array

    while (left <= right) {
        const leftSquare = nums[left] * nums[left];
        const rightSquare = nums[right] * nums[right];

        if (leftSquare > rightSquare) {
            result[position] = leftSquare;
            left++;
        } else {
            result[position] = rightSquare;
            right--;
        }
        position--;
    }

    return result; // The result is already sorted in ascending order
}