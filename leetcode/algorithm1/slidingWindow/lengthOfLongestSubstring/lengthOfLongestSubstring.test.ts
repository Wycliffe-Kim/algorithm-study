import { lengthOfLongestSubstring } from './lengthOfLongestSubstring';

test('s = "abcabcbb"', () => {
  const result = lengthOfLongestSubstring('abcabcbb');
  expect(result).toBe(3);
});

test('s = "bbbbb"', () => {
  const result = lengthOfLongestSubstring('bbbbb');
  expect(result).toBe(1);
});

test('s = "pwwkew"', () => {
  const result = lengthOfLongestSubstring('pwwkew');
  expect(result).toBe(3);
});

test('s = "jbpnbwwd"', () => {
  const result = lengthOfLongestSubstring('jbpnbwwd');
  expect(result).toBe(4);
});
