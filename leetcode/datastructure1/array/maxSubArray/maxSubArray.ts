export function maxSubArray(nums: number[]): number {
  // let sum = -10000;
  // for (let windowSize = 1; windowSize <= nums.length; windowSize++) {
  //   for (let loop = 0; loop <= nums.length - windowSize; loop++) {
  //     const _sum = nums
  //       .slice(loop, loop + windowSize)
  //       .reduce((prev, current) => prev + current, 0);
  //     if (_sum > sum) {
  //       sum = _sum;
  //     }
  //   }
  // }
  // return sum;

  const n = nums.length;
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return nums[0];
  }

  let maxAsFar = nums[0];
  let maxAddup = nums[0];

  for (let i = 1; i < n; i++) {
    const element = nums[i];
    maxAddup = maxAddup + element < element ? element : maxAddup + element;
    maxAsFar = Math.max(maxAddup, maxAsFar);
  }
  return maxAsFar;
}
