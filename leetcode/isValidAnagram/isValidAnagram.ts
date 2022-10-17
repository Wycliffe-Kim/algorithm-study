export function isValidAnagram(s: string, t: string): boolean {
  type CheckDict = { [key: string]: number };
  let sCheckDict: CheckDict = {};
  let tCheckDict: CheckDict = {};
  const set = (checkDict: CheckDict, char: string) => {
    if (char in checkDict) {
      checkDict[char] += 1;
    } else {
      checkDict[char] = 1;
    }
    return checkDict;
  };

  s.split('').forEach((char) => {
    sCheckDict = set(sCheckDict, char);
  });

  t.split('').forEach((char) => {
    tCheckDict = set(tCheckDict, char);
  });

  const sEntries = Object.entries(sCheckDict);
  const tEntries = Object.entries(tCheckDict);

  if (sEntries.length !== tEntries.length) {
    return false;
  }

  const result = sEntries.reduce(
    (prev, value) =>
      prev && value[0] in tCheckDict && value[1] === tCheckDict[value[0]],
    true
  );

  return result;
}
