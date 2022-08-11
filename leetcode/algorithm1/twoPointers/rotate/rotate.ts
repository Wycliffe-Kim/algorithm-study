const reverse = (nums: number[], start: number, end: number) => {
  let temp: number = nums[0];
  const size = end - start;

  console.log(size);
  if (size > 0) {
    for (let i = 0; i < Math.floor(size / 2); i++) {
      const point1 = i + start;
      const point2 = size + start - i - 1;
      temp = nums[point1];
      nums[point1] = nums[point2];
      nums[point2] = temp;
    }
  }
};

export function rotate(nums: number[], k: number) {
  const n = nums.length;
  if (k !== n) {
    if (k > n) {
      k = k % n;
    }
    reverse(nums, 0, n - k);
    reverse(nums, n - k, n);
    reverse(nums, 0, n);
  }
}
