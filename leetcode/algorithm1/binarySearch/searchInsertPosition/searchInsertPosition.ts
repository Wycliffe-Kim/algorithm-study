export function searchInsertPosition(nums: number[], target: number): number {
  const getGuess = (min: number, max: number) =>
    Math.floor((max - min) / 2) + min;

  let min = 0;
  let max = nums.length;
  let guess = getGuess(min, max);
  console.log('----------------');
  console.log('start', `guess: ${guess}`, `min: ${min}`, `max: ${max}`);

  let result = nums.length;
  while (true) {
    if (nums[guess] >= target) {
      if (guess - 1 >= 0) {
        if (nums[guess - 1] < target) {
          result = guess;
          break;
        }
      }

      if (max === guess) {
        result = max;
        break;
      }

      max = guess;
      guess = getGuess(min, max);
      console.log(
        'case A',
        `guess: ${guess}`,
        `min: ${min}`,
        `max: ${max}`,
        `nums[guess]: ${nums[guess]}`,
        `target: ${target}`
      );
    } else if (nums[guess] < target) {
      if (guess + 1 < nums.length) {
        if (nums[guess + 1] >= target) {
          result = guess + 1;
          break;
        }
      }

      if (min === guess) {
        result = min + 1;
        break;
      }

      min = guess;
      guess = getGuess(min, max);
      console.log(
        'case B',
        `guess: ${guess}`,
        `min: ${min}`,
        `max: ${max}`,
        `nums[guess]: ${nums[guess]}`,
        `target: ${target}`
      );
    }
  }

  return result;
}
