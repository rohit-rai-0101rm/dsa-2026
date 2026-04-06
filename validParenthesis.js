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
