import { reverseString } from './reverseString';

test('s = ["h","e","l","l","o"]', () => {
  const s = ['h', 'e', 'l', 'l', 'o'];
  reverseString(s);
  expect(JSON.stringify(s)).toBe('["o","l","l","e","h"]');
});

test('s = ["H","a","n","n","a","h"]', () => {
  const s = ['H', 'a', 'n', 'n', 'a', 'h'];
  reverseString(s);
  expect(JSON.stringify(s)).toBe('["h","a","n","n","a","H"]');
});
