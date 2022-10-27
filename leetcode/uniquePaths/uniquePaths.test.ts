import { uniquePaths } from './uniquePaths';

test('m = 3, n = 7', () => {
  expect(uniquePaths(3, 7)).toBe(28);
});

test('m = 3, n = 2', () => {
  expect(uniquePaths(3, 2)).toBe(3);
});

test('m = 1, n = 2', () => {
  expect(uniquePaths(1, 2)).toBe(1);
});

test('m = 2, n = 2', () => {
  expect(uniquePaths(2, 2)).toBe(2);
});
