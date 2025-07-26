### 🧠 What is Kadane’s Algorithm? (The Philosophy)

Kadane’s Algorithm is about building up a running subarray sum as you traverse the array:

- If adding the current element **improves/maximizes** your subarray, keep it.

- If it makes things worse (sum becomes negative), just drop it and start fresh.

It’s like walking through life:

- If a friend adds positivity to your journey, keep them in your circle.

- If they drag you down, let them go and move on!

Mathematically:

```
currentSum = max(currentElement, currentElement + currentSum)
maxSoFar = max(maxSoFar, currentSum)
```

> This resetting philosophy is why Kadane’s works so beautifully.

### 🎯 Where is Kadane’s Algorithm Used?

- Maximum Subarray Sum Problem
  The classic problem from LeetCode/DSA: “Find the contiguous subarray with the largest sum.”

- Dynamic Programming Problems
  Many variations of sequence optimization can be reduced to a Kadane-like recurrence.

- 2D Maximum Sum Submatrix
  A 2D version applies Kadane row by row for matrix problems.

- Stock Market / Profit Problems
  Finding the best time interval for maximum gain can also relate to Kadane.

- Game Development / Signal Processing
  When analyzing streaks of “goodness” (high values vs noise).

So it’s not just a “DSA trick”—it’s a pattern for optimal contiguous decisions.
