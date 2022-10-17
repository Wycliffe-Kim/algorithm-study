import { searchMatrix } from './searchMatrix';

test('matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3', () => {
  const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ];
  const target = 3;
  const result = searchMatrix(matrix, target);
  expect(result).toBe(true);
});

test('matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13', () => {
  const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ];
  const target = 13;
  const result = searchMatrix(matrix, target);
  expect(result).toBe(false);
});

test('matrix = [[1,3]], target = 1', () => {
  const matrix = [[1, 3]];
  const target = 1;
  const result = searchMatrix(matrix, target);
  expect(result).toBe(true);
});
