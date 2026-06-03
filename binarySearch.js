/*
  Problem: Binary Search
  Given a sorted array and a target value, return the index of the target or -1 if not found.

  Approach: Two Pointers (Divide and Conquer)
  - Maintain left and right pointers at the start and end of the array.
  - Calculate mid index each iteration.
  - If arr[mid] === target → return mid.
  - If arr[mid] < target → search right half (left = mid + 1).
  - If arr[mid] > target → search left half (right = mid - 1).
  - Repeat until left > right.

  Time Complexity: O(log n) — halve the search space each step.
  Space Complexity: O(1) — no extra space used.
*/
const binarySearch = (arr, searchTerm) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === searchTerm) return mid;
    else if (arr[mid] < searchTerm) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
};
