import { matrixReshape } from './matrixReshape';

test('mat = [[1,2],[3,4]], r = 1, c = 4', () => {
  const result = matrixReshape(
    [
      [1, 2],
      [3, 4],
    ],
    1,
    4
  );
  expect(JSON.stringify(result)).toBe('[[1,2,3,4]]');
});

test('mat = [[1,2],[3,4]], r = 2, c = 4', () => {
  const result = matrixReshape(
    [
      [1, 2],
      [3, 4],
    ],
    2,
    4
  );
  expect(JSON.stringify(result)).toBe('[[1,2],[3,4]]');
});
