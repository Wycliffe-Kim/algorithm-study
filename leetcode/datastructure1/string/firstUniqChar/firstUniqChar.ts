export function firstUniqChar(s: string): number {
  type CharInfo = { index: number; count: number };
  type CheckDict = { [key: string]: CharInfo };
  const checkDict: CheckDict = {};

  s.split('').forEach((char, i) => {
    if (char in checkDict) {
      const { index, count } = checkDict[char];
      checkDict[char] = { index: index, count: count + 1 };
    } else {
      checkDict[char] = { index: i, count: 1 };
    }
  });

  const countOneResult = Object.entries(checkDict).filter(
    (value) => value[1].count === 1
  );
  if (countOneResult.length === 0) {
    return -1;
  }

  let minIndex = s.length;
  countOneResult.forEach((value) => {
    if (value[1].index < minIndex) {
      minIndex = value[1].index;
    }
  });

  return minIndex;
}
