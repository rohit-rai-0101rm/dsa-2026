/*
  Problem: Maximum Subarray Sum (Kadane's Algorithm)
  Find the contiguous subarray with the largest sum.

  Approach: Kadane's Algorithm (Dynamic Programming)
  - Track currSum (best sum ending at current index) and maxSum (global best).
  - At each element, decide: start a new subarray from here, or extend the previous one.
    currSum = max(nums[i], currSum + nums[i])
  - Update maxSum whenever currSum is larger.

  Time Complexity: O(n) — single pass through the array.
  Space Complexity: O(1) — only two variables maintained.
*/
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const findMaxSum = (nums) => {
  let maxSum = nums[0];
  let currSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currSum = Math.max(nums[i], nums[i] + currSum);
    maxSum = Math.max(currSum, maxSum);
  }

  return maxSum;
};
