/*
  Problem: Valid Parentheses
  Given a string of brackets, determine if it is valid (every open bracket has a matching close bracket in correct order).

  Approach: Stack
  - Use a map to pair each closing bracket with its matching opening bracket.
  - Iterate through the string:
    - If it's an opening bracket → push onto the stack.
    - If it's a closing bracket → pop from the stack and check if it matches.
      If it doesn't match → return false.
  - After the loop, the stack must be empty (no unmatched opening brackets left).

  Time Complexity: O(n) — single pass through the string.
  Space Complexity: O(n) — stack can hold up to n/2 brackets.
*/
const stack = [];
const map = { ")": "(", "}": "{", "]": "[" };

for (let char of str) {
  if (char === "(" || char === "{" || char === "[") {
    stack.push(char);
  } else {
    const top = stack.pop();
    if (top !== map[char]) {
      return false;
    }
  }
}

return stack.length === 0;
