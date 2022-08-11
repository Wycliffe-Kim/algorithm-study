export function twoSum(numbers: number[], target: number): number[] {
  const n = numbers.length;
  let start = 0;
  let end = n - 1;
  let result: [number, number] = [start + 1, end + 1];
  for (let i = 0; i < n; i++) {
    const sum = numbers[start] + numbers[end];
    if (sum > target) {
      end--;
    } else if (sum < target) {
      start++;
    } else {
      result = [start + 1, end + 1];
    }
  }
  return result;
}
