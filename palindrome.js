/*
  Problem: Check if a String is a Palindrome
  Return true if the string reads the same forwards and backwards.

  Approach: Two Pointers
  - Place one pointer at the start (left) and one at the end (right).
  - Compare characters at both pointers; if they differ → not a palindrome.
  - Move pointers inward (left++, right--) until they meet.
  - If all comparisons pass → it is a palindrome.

  Time Complexity: O(n) — each character is visited at most once.
  Space Complexity: O(1) — no extra space used.
*/
const isPalindrome = (str) => {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
