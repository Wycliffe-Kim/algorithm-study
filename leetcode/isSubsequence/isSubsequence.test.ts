import { isSubsequence } from './isSubsequence';

test('s = abc, t = ahbgdc', () => {
  const s = 'abc';
  const t = 'ahbgdc';
  expect(isSubsequence(s, t)).toBe(true);
});

test('s = axc, t = ahbgdc', () => {
  const s = 'axc';
  const t = 'ahbgdc';
  expect(isSubsequence(s, t)).toBe(false);
});

test('s = acb, t = ahbgdc', () => {
  const s = 'acb';
  const t = 'ahbgdc';
  expect(isSubsequence(s, t)).toBe(false);
});
