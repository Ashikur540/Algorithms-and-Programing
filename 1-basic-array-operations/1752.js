//  https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/

/*
💭 Brute Force Approach
🎯 Idea:
If we sort the array and generate all possible rotations of it, one of them should match the given input nums. If none match, then nums is not a sorted & rotated version.

*/
function rotateIndex(arr, i) {
    const nextP = arr.slice(i); // O(n-i)
    const prevP = arr.slice(0, i); // O(i)
    return nextP.concat(prevP); // O(n)
    // total= O(n)
}

var check = function (nums) {
    const sorted = [...nums].sort((a, b) => a - b); // O(n)+ O(n logn) - happens once

    for (let i = 0; i < nums.length; i++) { // // O(n)
        const rotated = rotateIndex(sorted, i);
        if (JSON.stringify(rotated) === JSON.stringify(nums)) { // O(n)
            return true;
        }
    }

    return false;
};

/* Brute force
| Aspect | Complexity |
| ------ | ---------- |
| Time   | O(n²)      |
| Space  | O(n)       |

*/





/*
⚡ Optimal Solution
🎯 Idea:
Avoid full rotation and comparison. Just count how many times the order breaks — that is, how many times nums[i] > nums[i + 1] (circularly).

A sorted then rotated array has maximum one drop or serial break in order
when checked in a circular way.


❌ False Case Examples
❌ Example 1: [2, 1, 3, 4]
Check each pair (circularly):


2 > 1 → ❌ drop 1
1 < 3 → ✅
3 < 4 → ✅
4 > 2 → ❌ drop 2 (wrap around)
✅ Two drops → ❌ Not valid

❌ Example 2: [3, 5, 4, 1, 2]
Sorted version would be: [1, 2, 3, 4, 5]

Let's check:


3 < 5 → ✅
5 > 4 → ❌ drop 1
4 > 1 → ❌ drop 2
1 < 2 → ✅
2 < 3 → ✅
✅ Two drops → ❌ Not valid

❌ Example 3: [4, 1, 2, 3, 0]

4 > 1 → ❌ drop 1
1 < 2 → ✅
2 < 3 → ✅
3 > 0 → ❌ drop 2
0 < 4 → ✅
✅ Two drops → ❌ Not valid
*/





// ## Solution


function check(nums) {
    let count = 0;
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        const current = nums[i];
        const next = nums[(i + 1) % n]; //To simulate rotation and compare the last element with the first one, making the array circular.

        if (current > next) {
            count++;
        }

        if (count > 1) return false;
    }

    return true;
}


/*

| Aspect | Complexity |
| ------ | ---------- |
| Time   | O(n)       |
| Space  | O(1)       |

*/


function findUnion(a, b) {
    const total = a.concat(b);
    const uniq = [...new Set(total)].sort((a, b) => a - b)
    console.log("", uniq)

    return uniq

}
let a = [1, 2, 3, 4, 5], b = [1, 2, 3, 6, 7]
console.log(findUnion(a, b))
