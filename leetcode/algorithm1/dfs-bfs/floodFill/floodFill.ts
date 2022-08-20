type ValidFunc = (
  image: number[][],
  visitor: boolean[][],
  scopedColor: number,
  row: number,
  col: number
) => boolean;

const push =
  (rowCount: number, colCount: number) =>
  (data: [number, number][], row: number, col: number) => {
    if (row >= 0 && row < rowCount && col >= 0 && col < colCount) {
      data.push([row, col]);
    }
    return data;
  };

const rowCount = <T>(data: T[][]) => data.length;
const colCount = <T>(data: T[][]) => (rowCount(data) > 0 ? data[0].length : 0);

const checkVisitor = (visitor: boolean[][], row: number, col: number) => {
  const _rowCount = rowCount(visitor);
  const _colCount = colCount(visitor);

  if (row < 0 || row >= _rowCount || col < 0 || col >= _colCount) {
    return false;
  }

  return visitor[row][col];
};

const checkCellValid: ValidFunc = (image, visitor, scopedColor, row, col) => {
  const _rowCount = rowCount(image);
  const _colCount = colCount(image);
  if (row < 0 || row >= _rowCount || col < 0 || col >= _colCount) {
    return false;
  }
  if (visitor[row][col]) {
    return false;
  }

  return image[row][col] === scopedColor;
};

const checkAdjacentCellValid: ValidFunc = (
  image,
  visitor,
  scopedColor,
  row,
  col
) => {
  const _checkCellValid =
    (image: number[][], visitor: boolean[][], scopedColor: number) =>
    (row: number, col: number) =>
      checkCellValid(image, visitor, scopedColor, row, col);

  const curriedCheckCellValid = _checkCellValid(image, visitor, scopedColor);
  return (
    (checkVisitor(visitor, row - 1, col)
      ? true
      : curriedCheckCellValid(row - 1, col)) ||
    (checkVisitor(visitor, row + 1, col)
      ? true
      : curriedCheckCellValid(row + 1, col)) ||
    (checkVisitor(visitor, row, col - 1)
      ? true
      : curriedCheckCellValid(row, col - 1)) ||
    (checkVisitor(visitor, row, col + 1)
      ? true
      : curriedCheckCellValid(row, col + 1))
  );
};

const isValid: ValidFunc = (image, visitor, scopedColor, row, col) => {
  const cellValid = checkCellValid(image, visitor, scopedColor, row, col);
  const adjacentCellValid = checkAdjacentCellValid(
    image,
    visitor,
    scopedColor,
    row,
    col
  );
  if (row >= 0 && row < rowCount(image) && col >= 0 && col < colCount(image)) {
    // console.log(row, col, cellValid, adjacentCellValid);
  }
  return cellValid && adjacentCellValid;
};

export function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  const scopedColor = image[sr][sc];
  const _rowCount = rowCount(image);
  const _colCount = colCount(image);
  const _push = push(_rowCount, _colCount);

  const result = image.map((row) => [...row]);
  const visitor = Array.from(Array(_rowCount), (): boolean[] =>
    Array(_colCount).fill(false)
  );
  let stack: [number, number][] = [];
  stack = _push(stack, sr, sc);

  while (stack.length > 0) {
    console.log(stack);
    const indexes = stack.pop();
    if (indexes) {
      const [row, col] = indexes;

      if (!isValid(image, visitor, scopedColor, row, col)) {
        continue;
      }

      visitor[row][col] = true;
      result[row][col] = color;

      stack = _push(stack, row - 1, col);
      stack = _push(stack, row + 1, col);
      stack = _push(stack, row, col - 1);
      stack = _push(stack, row, col + 1);
    }
  }
  result[sr][sc] = color;

  return result;
}
