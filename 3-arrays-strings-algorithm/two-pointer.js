

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