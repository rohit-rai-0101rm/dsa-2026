/*
  Problem: Two Sum
  Given an array and a target, return the indices of the two numbers that add up to target.

  Approach: Hash Map (One Pass)
  - For each element, compute leftOver = target - arr[i].
  - Check if leftOver already exists in the map → found the pair, return both indices.
  - Otherwise, store the current number and its index in the map.
  - This avoids the O(n²) brute force nested loop.

  Time Complexity: O(n) — single pass through the array.
  Space Complexity: O(n) — map stores up to n elements.
*/
const arr = [2, 4, 7, 8, 9];
const map = new Map();
const target = 11;

for (let i = 0; i < arr.length; i++) {
  let leftOver = target - arr[i];

  if (map.has(leftOver)) {
    return [map.get(leftOver), i]; // return both indices
  } else {
    map.set(arr[i], i); // store number → index
  }
}
