import { intersect } from './intersect';

test('nums1 = [1,2,2,1], nums2 = [2,2]', () => {
  const nums1 = [1, 2, 2, 1];
  const nums2 = [2, 2];
  const result = intersect(nums1, nums2);
  expect(JSON.stringify(result)).toBe('[2,2]');
});

test('nums1 = [4,9,5], nums2 = [9,4,9,8,4]', () => {
  const nums1 = [4, 9, 5];
  const nums2 = [9, 4, 9, 8, 4];
  const _result = intersect(nums1, nums2);
  const result =
    JSON.stringify(_result) === '[4,9]' || JSON.stringify(_result) === '[9,4]';
  expect(result).toBe(true);
});
