export function ransomNote(ransomNote: string, magazine: string): boolean {
  type CheckDict = { [key: string]: number };
  let ransomNoteCheckDict: CheckDict = {};
  let magazineCheckDict: CheckDict = {};

  const set = (checkDict: CheckDict, char: string) => {
    if (char in checkDict) {
      checkDict[char] += 1;
    } else {
      checkDict[char] = 1;
    }
    return checkDict;
  };

  ransomNote.split('').forEach((char) => {
    ransomNoteCheckDict = set(ransomNoteCheckDict, char);
  });

  magazine.split('').forEach((char) => {
    magazineCheckDict = set(magazineCheckDict, char);
  });

  const tempResult = Object.keys(ransomNoteCheckDict).reduce(
    (prev, char) => prev && char in magazineCheckDict,
    true
  );

  if (!tempResult) {
    return false;
  }

  const ransomNotes = Object.entries(ransomNoteCheckDict);
  for (let [char, count] of ransomNotes) {
    if (count > magazineCheckDict[char]) {
      return false;
    }
  }

  return true;
}
