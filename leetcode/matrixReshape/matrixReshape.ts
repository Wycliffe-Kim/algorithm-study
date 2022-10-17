export function matrixReshape(
  mat: number[][],
  r: number,
  c: number
): number[][] {
  const m = mat.length;
  const n = mat[0].length;
  if (m * n !== r * c) {
    return mat;
  }

  let destCol = 0;

  let result: number[][] = [];
  let _result: number[] = [];
  for (let srcRow = 0; srcRow < m; srcRow++) {
    for (let srcCol = 0; srcCol < n; srcCol++) {
      const elem = mat[srcRow][srcCol];
      // console.log(destRow, destCol, elem);
      if (destCol < c - 1) {
        _result = _result.concat(elem);
        // console.log("case 1", _result, result);
        destCol++;
      } else {
        destCol = 0;
        _result = _result.concat(elem);
        result = result.concat([_result]);
        // console.log("case 2", _result, result);
        _result = [];
      }
    }
  }

  // console.log(result);

  return result;
}
