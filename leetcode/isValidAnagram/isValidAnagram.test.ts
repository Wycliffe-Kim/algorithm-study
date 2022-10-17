import { isValidAnagram } from './isValidAnagram';

test('s = anagram, t = nagaram', () => {
  const result = isValidAnagram('anagram', 'nagaram');
  expect(result).toBe(true);
});

test('s = rat, t = car', () => {
  const result = isValidAnagram('rat', 'car');
  expect(result).toBe(false);
});

test('s = a, t = ab', () => {
  const result = isValidAnagram('a', 'ab');
  expect(result).toBe(false);
});
