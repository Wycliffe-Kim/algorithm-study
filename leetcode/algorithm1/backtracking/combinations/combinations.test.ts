import { combine } from './combinations';

test('n = 4, k = 2', () => {
  const result = combine(4, 2);
  expect(JSON.stringify(result)).toBe('[[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]');
});

test('n = 1, k = 1', () => {
  const result = combine(1, 1);
  expect(JSON.stringify(result)).toBe('[[1]]');
});
