export function pascalTriangle(numRows: number): number[][] {
  if (numRows === 1) {
    return [[1]];
  }

  let result: number[][] = [];
  for (let i = 1; i <= numRows; i++) {
    let _result = new Array<number>(i);
    _result[0] = 1;
    _result[i - 1] = 1;
    if (i > 2) {
      for (let j = 1; j < i - 1; j++) {
        const elem = result[i - 2][j - 1] + result[i - 2][j];
        _result[j] = elem;
      }
    }
    result = result.concat([_result]);
  }

  return result;
}
