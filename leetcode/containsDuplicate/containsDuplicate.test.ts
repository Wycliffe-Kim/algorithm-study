import { containsDuplicate } from './containsDuplicate';

test('[1, 2, 3, 1]', () => {
  const result = containsDuplicate([1, 2, 3, 1]);
  expect(result).toBe(true);
});

test('[1, 2, 3, 4]', () => {
  const result = containsDuplicate([1, 2, 3, 4]);
  expect(result).toBe(false);
});

test('[1, 1, 1, 3, 3, 4, 3, 2, 4, 2]', () => {
  const result = containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
  expect(result).toBe(true);
});
