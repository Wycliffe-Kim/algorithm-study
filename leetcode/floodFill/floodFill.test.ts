import { floodFill } from './floodFill';

test('image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2', () => {
  const image = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ];
  const sr = 1,
    sc = 1,
    color = 2;

  const result = floodFill(image, sr, sc, color);
  expect(JSON.stringify(result)).toBe('[[2,2,2],[2,2,0],[2,0,1]]');
});

test('image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0', () => {
  const image = [
    [0, 0, 0],
    [0, 0, 0],
  ];
  const sr = 0,
    sc = 0,
    color = 0;

  const result = floodFill(image, sr, sc, color);
  expect(JSON.stringify(result)).toBe(JSON.stringify(image));
});

test('image = [[0,0,0],[0,0,0]], sr = 1, sc = 0, color = 2', () => {
  const image = [
    [0, 0, 0],
    [0, 0, 0],
  ];
  const sr = 1,
    sc = 0,
    color = 2;

  const result = floodFill(image, sr, sc, color);
  expect(JSON.stringify(result)).toBe('[[2,2,2],[2,2,2]]');
});

test('image = [[0,0,0],[0,1,0]], sr = 1, sc = 1, color = 2', () => {
  const image = [
    [0, 0, 0],
    [0, 1, 0],
  ];
  const sr = 1,
    sc = 1,
    color = 2;

  const result = floodFill(image, sr, sc, color);
  expect(JSON.stringify(result)).toBe('[[0,0,0],[0,2,0]]');
});

test('image = [[0,0,0],[0,1,1]], sr = 1, sc = 1, color = 2', () => {
  const image = [
    [0, 0, 0],
    [0, 1, 1],
  ];
  const sr = 1,
    sc = 1,
    color = 2;
  const result = floodFill(image, sr, sc, color);
  expect(JSON.stringify(result)).toBe('[[0,0,0],[0,2,2]]');
});
