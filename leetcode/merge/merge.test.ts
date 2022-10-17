import { merge } from './merge';

test('nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3', () => {
  const nums1 = [1, 2, 3, 0, 0, 0];
  const m = 3;
  const nums2 = [2, 5, 6];
  const n = 3;

  const result = merge(nums1, m, nums2, n);
  expect(JSON.stringify(result)).toBe('[1,2,2,3,5,6]');
});
