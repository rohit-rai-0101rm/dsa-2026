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
