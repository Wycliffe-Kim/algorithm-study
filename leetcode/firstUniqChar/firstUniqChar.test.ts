import { firstUniqChar } from './firstUniqChar';

test('s = leetcode', () => {
  const s = 'leetcode';
  const result = firstUniqChar(s);
  expect(result).toBe(0);
});

test('s = loveleetcode', () => {
  const s = 'loveleetcode';
  const result = firstUniqChar(s);
  expect(result).toBe(2);
});

test('s = aabb', () => {
  const s = 'aabb';
  const result = firstUniqChar(s);
  expect(result).toBe(-1);
});

test('s = dddccdbba', () => {
  const s = 'dddccdbba';
  const result = firstUniqChar(s);
  expect(result).toBe(8);
});
