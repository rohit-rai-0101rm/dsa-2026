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
