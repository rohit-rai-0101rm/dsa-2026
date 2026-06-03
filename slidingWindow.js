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
    windowSum = windowSum + arr[i] + srr[i - k];
  }

  maxSum = Math.max(windowSum, maxSum);

  return maxSum;
};
