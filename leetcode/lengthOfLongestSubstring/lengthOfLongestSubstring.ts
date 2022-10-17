type SubDict = { [ch: string]: number };

const set = (subDict: SubDict, ch: string) => {
  if (ch in subDict) {
    subDict[ch]++;
  } else {
    subDict[ch] = 1;
  }
  return subDict;
};

const remove = (subDict: SubDict, ch: string) => {
  if (ch in subDict) {
    subDict[ch]--;
    if (subDict[ch] === 0) {
      delete subDict[ch];
    }
  }
  return subDict;
};

const length = (subDict: SubDict) => Object.keys(subDict).length;

const checkDuplicate = (subDict: SubDict) =>
  Object.values(subDict).filter((value) => value > 1).length > 0;

export function lengthOfLongestSubstring(s: string): number {
  let subDict: SubDict = {};
  let start = 0;
  let maxLen = 0;
  for (let end = 0; end < s.length; end++) {
    subDict = set(subDict, s[end]);
    maxLen = Math.max(maxLen, length(subDict));
    if (checkDuplicate(subDict)) {
      subDict = remove(subDict, s[start]);
      start++;
    }
  }

  return maxLen;
}
