import { twoSum } from './twoSum';

test('numbers = [2,7,11,15], target = 9', () => {
  const result = twoSum([2, 7, 11, 15], 9);
  expect(JSON.stringify(result)).toBe('[1,2]');
});

test('numbers = [2,3,4], target = 6', () => {
  const result = twoSum([2, 3, 4], 6);
  expect(JSON.stringify(result)).toBe('[1,3]');
});

test('numbers = [-1,0], target = -1', () => {
  const result = twoSum([-1, 0], -1);
  expect(JSON.stringify(result)).toBe('[1,2]');
});
