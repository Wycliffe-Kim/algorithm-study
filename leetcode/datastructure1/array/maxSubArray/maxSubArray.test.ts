import { maxSubArray } from './maxSubArray';

test('[-2, 1, -3, 4, -1, 2, 1, -5, 4]', () => {
  const result = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
  expect(result).toBe(6);
});

test('[1]', () => {
  const result = maxSubArray([1]);
  expect(result).toBe(1);
});

test('[5, 4, -1, 7, 8]', () => {
  const result = maxSubArray([5, 4, -1, 7, 8]);
  expect(result).toBe(23);
});
