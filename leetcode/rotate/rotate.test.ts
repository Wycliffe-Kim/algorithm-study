import { rotate } from './rotate';

test('nums = [1,2,3,4,5,6,7], k = 3', () => {
  const nums = [1, 2, 3, 4, 5, 6, 7],
    k = 3;
  rotate(nums, k);
  expect(JSON.stringify(nums)).toBe('[5,6,7,1,2,3,4]');
});

test('nums = [-1,-100,3,99], k = 2', () => {
  const nums = [-1, -100, 3, 99],
    k = 2;
  rotate(nums, k);
  expect(JSON.stringify(nums)).toBe('[3,99,-1,-100]');
});

test('nums = [1,2], k = 5', () => {
  const nums = [1, 2],
    k = 5;
  rotate(nums, k);
  expect(JSON.stringify(nums)).toBe('[2,1]');
});

test('nums = [1,2,3,4], k = 4', () => {
  const nums = [1, 2, 3, 4],
    k = 4;
  rotate(nums, k);
  expect(JSON.stringify(nums)).toBe('[1,2,3,4]');
});

test('nums = [1,2,3,4], k = 5', () => {
  const nums = [1, 2, 3, 4],
    k = 5;
  rotate(nums, k);
  expect(JSON.stringify(nums)).toBe('[4,1,2,3]');
});
