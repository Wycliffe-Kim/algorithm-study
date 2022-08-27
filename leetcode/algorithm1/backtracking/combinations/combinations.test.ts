import { combination } from './combinations';

test('n = 1, k = 1', () => {
  const result = combination(1, 1);
  expect(JSON.stringify(result)).toBe('[[1]]');
});

test('n = 4, k = 2', () => {
  const result = combination(4, 2);
  expect(JSON.stringify(result)).toBe('[[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]');
});

test('n = 5, k = 3', () => {
  const result = combination(5, 3);
  expect(JSON.stringify(result)).toBe(
    '[[1,2,3],[1,2,4],[1,2,5],[1,3,4],[1,3,5],[1,4,5],[2,3,4],[2,3,5],[2,4,5],[3,4,5]]'
  );
});
