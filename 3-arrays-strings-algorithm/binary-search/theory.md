### Intuition of Binary Search

Binary Search is a powerful algorithm that efficiently finds the position of a target value within a sorted array. The key idea is to repeatedly divide the search interval in half, which significantly reduces the number of comparisons needed compared to linear search.

Steps:

1. **Start with the entire array**: Set two pointers, `low` at the beginning and `high` at the end of the array.
2. **Calculate the middle index**: Use the formula `mid = Math.floor((low + high) / 2)` to find the middle element.
3. **Compare the middle element with the target**:
   - If the middle element equals the target, return its index.
   - If the middle element is less than the target, narrow the search to the right half by setting `low = mid + 1`.
   - If the middle element is greater than the target, narrow the search to the left half by setting `high = mid - 1`.
4. **Repeat**: Continue this process until the target is found or the search interval is empty (`low > high`).
5. **Return**: If the target is not found, return -1 or the position where it can be inserted.
