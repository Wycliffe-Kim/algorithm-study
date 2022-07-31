import { maxProfit } from './maxProfit';

test('prices = [7,1,5,3,6,4]', () => {
  const result = maxProfit([7, 1, 5, 3, 6, 4]);
  expect(result).toBe(5);
});

test('prices = [7,6,4,3,1]', () => {
  const result = maxProfit([7, 6, 4, 3, 1]);
  expect(result).toBe(0);
});

test('prices = [2,4,1]', () => {
  const result = maxProfit([2, 4, 1]);
  expect(result).toBe(2);
});
