export function twoSum(nums: number[], target: number): number[] {
  const n = nums.length;
  let result: number[] = [];
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      const addResult = nums[i] + nums[j];
      if (addResult === target) {
        result = [i, j];
      }
    }
  }
  return result;
}
