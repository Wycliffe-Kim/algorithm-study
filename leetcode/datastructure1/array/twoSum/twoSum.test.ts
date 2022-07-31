import { twoSum } from './twoSum';

test('nums = [2, 7, 11, 15] target = 9', () => {
  const result = twoSum([2, 7, 11, 15], 9);
  expect(JSON.stringify(result)).toBe('[0,1]');
});

test('nums = [3, 2, 4] target = 6', () => {
  const result = twoSum([3, 2, 4], 6);
  expect(JSON.stringify(result)).toBe('[1,2]');
});

test('nums = [3,3] target = 6', () => {
  const result = twoSum([3, 3], 6);
  expect(JSON.stringify(result)).toBe('[0,1]');
});
