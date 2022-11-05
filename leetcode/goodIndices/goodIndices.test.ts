import { goodIndices } from './goodIndices';

test('nums = [2,1,1,1,3,4,1], k = 2', () => {
  expect(JSON.stringify(goodIndices([2, 1, 1, 1, 3, 4, 1], 2))).toBe('[2,3]');
});

test('nums = [2,1,1,2], k = 2', () => {
  expect(JSON.stringify(goodIndices([2, 1, 1, 2], 2))).toBe('[]');
});

test('nums = [388589,17165,726687,401298,600033,537254,301052,151069,399955]', () => {
  expect(
    JSON.stringify(
      goodIndices(
        [388589, 17165, 726687, 401298, 600033, 537254, 301052, 151069, 399955],
        4
      )
    )
  ).toBe('[]');
});
