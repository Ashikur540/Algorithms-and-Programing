# Two Pointer Theory

Two pointer theory is a technique used to solve problems that involve arrays or linked lists. It is a two-pointer technique that is used to traverse the array or linked list in a single pass. This technique is often used to solve problems more efficiently, typically reducing the time complexity from O(n^2) to O(n).

## When to use two pointer theory?

- Two pointer theory is useful when we need to compare elements in an array or linked list with a specific condition.
- It is also useful when we need to find a pair or triplet of elements that satisfy a certain condition.
- When dealing with sorted arrays
- When you need to reverse arrays or strings
- When detecting cycles in linked lists
- When merging two sorted arrays
- When we need to compare elements in an array with a specific condition

## How to generally approach problems to use two pointer theory?

1. Initialize two pointers (often at the start, end, or one at each end of the data structure).
2. Move the pointers based on certain conditions.
3. Solve the problem by comparing or manipulating elements at the pointer positions.
4. Stop when the pointers meet or when a solution is found.

Lets see an examples by solving this two sum problem:

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

**Normal Approach**:

Usually you would think to solve this problem by using two for loops to check every possible pair in the array, and return the indices of the pair that sum up to the target. There is nothing wrong with this approach, but it is not efficient. The time complexity of this approach is O(n^2) because of that two nested for loops.

**TWO Pointer Approach**:

```js
let leftP = 0;
let rightP = nums.length - 1;

for (let i = 0; i < nums.length; i++) {
  if (nums[leftP] + nums[rightP] === target) {
    return [leftP, rightP];
  } else if (nums[leftP] + nums[rightP] < target) {
    //  if sum is smaller then target means we need grater numbers to get that target so we increment left pointer
    leftP++;
  } else {
    rightP--;
  }
}
```

The time complexity of this approach is O(n) because we are only traversing the array once.

**Notable Insights from the above example**:

- Here we use leftP and rightP as two pointers.
- We start with leftP at the start and rightP at the end of the array.
- We then move the pointers based on certain conditions.
- We solve the problem by comparing or manipulating elements at the pointer positions.
- We stop when the pointers meet or when a solution is found.

**Learning Resources**:

- [youtube channel to learn about the approach of leetCode problems](https://www.youtube.com/@peerprogramming)
- [youtube channel playlist to learn about the approach of string related leetCode problems](https://www.youtube.com/watch?v=TtqdT_odTXY&list=PLSY-6FdfiuaXOiPj1kx8amQW1qKFuMA4R&pp=iAQB)

**Practice Sources**:

- [neetcode.io- follow neetcode All series (two pointer)](https://neetcode.io/practice)
- [LeetCode - filter by tags like (two-pointer, string, array)](https://leetcode.com/problemset/)
