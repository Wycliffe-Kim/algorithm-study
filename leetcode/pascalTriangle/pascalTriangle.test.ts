import { pascalTriangle } from './pascalTriangle';

test('numRows = 1', () => {
  const result = pascalTriangle(1);
  expect(JSON.stringify(result)).toBe('[[1]]');
});

test('numRows = 5', () => {
  const result = pascalTriangle(5);
  expect(JSON.stringify(result)).toBe(
    '[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]'
  );
});

test('numRow = 9', () => {
  const result = pascalTriangle(9);
  expect(JSON.stringify(result)).toBe(
    '[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1],[1,5,10,10,5,1],[1,6,15,20,15,6,1],[1,7,21,35,35,21,7,1],[1,8,28,56,70,56,28,8,1]]'
  );
});
