export function searchMatrix(matrix: number[][], target: number): boolean {
  const getGuess = (min: number, max: number) =>
    Math.floor((max - min) / 2) + min;

  const result = matrix.reduce((prev, curr) => prev.concat(curr), []);

  let min = 0;
  let max = result.length;
  let guess = getGuess(min, max);

  while (true) {
    if (result[guess] > target) {
      max = guess;
      guess = getGuess(min, max);
      if (max === guess) {
        break;
      }
    } else if (result[guess] < target) {
      min = guess;
      guess = getGuess(min, max);
      if (min === guess) {
        break;
      }
    } else {
      return true;
    }
  }

  return false;
}
