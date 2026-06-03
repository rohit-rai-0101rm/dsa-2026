/*
  Problem: Maximum Sum Subarray of Size K
  Find the maximum sum of any contiguous subarray of length k.

  Approach: Sliding Window
  - Compute the sum of the first window of size k.
  - Slide the window one element at a time:
    - Add the new element entering the window (arr[i]).
    - Remove the element leaving the window (arr[i - k]).
  - Track the maximum window sum seen so far.

  Time Complexity: O(n) — single pass after the initial window setup.
  Space Complexity: O(1) — only a few variables maintained.
*/
const arr = [2, 1, 5, 1, 3, 2],
  k = 3;

const checkMaxSum = () => {
  if (k > arr.length) {
    return null;
  }
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let maxSum = windowSum;

  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(windowSum, maxSum);
  }

  return maxSum;
};
