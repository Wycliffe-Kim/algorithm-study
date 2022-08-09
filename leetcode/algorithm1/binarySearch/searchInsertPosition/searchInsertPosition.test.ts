import { searchInsertPosition } from './searchInsertPosition';

test('nums = [1,3,5,6], target = 5', () => {
  const result = searchInsertPosition([1, 3, 5, 6], 5);
  expect(result).toBe(2);
});

test('nums = [1,3,5,6], target = 2', () => {
  const result = searchInsertPosition([1, 3, 5, 6], 2);
  expect(result).toBe(1);
});

test('nums = [1,3,5,6], target = 7', () => {
  const result = searchInsertPosition([1, 3, 5, 6], 7);
  expect(result).toBe(4);
});

test('nums = [1,3,5,6], target = 0', () => {
  const result = searchInsertPosition([1, 3, 5, 6], 0);
  expect(result).toBe(0);
});
