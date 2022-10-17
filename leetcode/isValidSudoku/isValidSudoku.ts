export function isValidSudoku(board: string[][]): boolean {
  type CheckDict = { [key: string]: number };
  const checkDict: CheckDict = {
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0,
    '6': 0,
    '7': 0,
    '8': 0,
    '9': 0,
  };

  const check = (checkDict: CheckDict, data: string[]) => {
    const _checkDict = { ...checkDict };
    data.forEach((num) => {
      if (num in _checkDict) {
        _checkDict[num] += 1;
      }
    });

    const _checkDictList = Object.values(_checkDict);
    for (let value of _checkDictList) {
      if (value > 1) {
        return false;
      }
    }
    return true;
  };

  const checkRow =
    (checkDict: CheckDict, board: string[][]) => (index: number) =>
      check(checkDict, [...board[index]]);

  const checkColumn =
    (checkDict: CheckDict, board: string[][]) => (index: number) =>
      check(
        checkDict,
        [0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => board[i][index])
      );

  const checkSubBox =
    (checkDict: CheckDict, board: string[][]) =>
    (boxRowIndex: number, boxColumnIndex: number) => {
      const data: string[] = [];
      for (let i = 3 * boxRowIndex; i < 3 * (boxRowIndex + 1); i++) {
        for (let j = 3 * boxColumnIndex; j < 3 * (boxColumnIndex + 1); j++) {
          data.push(board[i][j]);
        }
      }

      return check(checkDict, data);
    };

  const _checkRow = checkRow(checkDict, board);
  const _checkColumn = checkColumn(checkDict, board);
  const _checkSubBox = checkSubBox(checkDict, board);

  for (let i = 0; i < 9; i++) {
    if (!_checkRow(i)) {
      return false;
    }

    for (let j = 0; j < 9; j++) {
      if (!_checkColumn(j)) {
        return false;
      }

      if (i % 3 === 0 && j % 3 === 0) {
        if (!_checkSubBox(i / 3, j / 3)) {
          return false;
        }
      }
    }
  }
  return true;
}
