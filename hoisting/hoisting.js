// ============================================
// HOISTING — How JavaScript reads your code
// ============================================
//
// JavaScript runs in 2 phases:
// Phase 1 — HOISTING: scans entire file first
//           var declarations → moved to top with value=undefined
//           function declarations → moved to top FULLY (with body)
//           let/const → moved to top BUT in Temporal Dead Zone
//
// Phase 2 — EXECUTION: runs code line by line
//
// RULE 1: var → hoisted as undefined
//   console.log(a) → undefined (not error!)
//   var a = 5
//
// RULE 2: function → fully hoisted
//   console.log(greet) → [Function: greet]
//   function greet() {}
//
// RULE 3: let/const → Temporal Dead Zone
//   console.log(b) → ReferenceError!
//   let b = 10
//
// WHY THIS MATTERS IN REACT NATIVE:
// → Never use var → causes scope leaking bugs
// → Always use const by default
// → Use let only when variable needs to change
// → function declarations can be called before defined
//   (useful for helper functions at bottom of file)

console.log(name); // undefined — var hoisted, value not yet assigned
console.log(greet); // [Function: greet] — fully hoisted

var name = "Rahul";
function greet() {
  return "Hello";
}
