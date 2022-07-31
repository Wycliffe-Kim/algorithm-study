import { ransomNote } from './ransomNote';

test('ransomNote = a, magazine = b', () => {
  const result = ransomNote('a', 'b');
  expect(result).toBe(false);
});

test('ransomNote = aa, magazine = ab', () => {
  const result = ransomNote('aa', 'ab');
  expect(result).toBe(false);
});

test('ransomNote = aa, magazine = aab', () => {
  const result = ransomNote('aa', 'aab');
  expect(result).toBe(true);
});

test('ransomNote = bcb, magazine = cjjajdfaaeegig', () => {
  const result = ransomNote('bcb', 'cjjajdfaaeegig');
  expect(result).toBe(false);
});
