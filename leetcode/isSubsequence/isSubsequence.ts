type TwoPointers = [string, string];

const shouldPushToResult = (
  currentMovingPointers: TwoPointers,
  currentScopePointers: TwoPointers
) => currentMovingPointers.join('') === currentScopePointers.join('');

export function isSubsequence(s: string, t: string) {
  if (s.length === 0) {
    return true;
  } else {
    if (t.length === 0) {
      return false;
    }
  }

  let currentScopeIndex = 0;
  const result: string[] = [];
  const currentMovingPointers: TwoPointers = ['', ''];
  const currentScopePointers: TwoPointers = ['', s[currentScopeIndex]];
  for (let data of t) {
    currentMovingPointers[1] = data;
    if (shouldPushToResult(currentMovingPointers, currentScopePointers)) {
      result.push(data);
      currentScopeIndex++;
      currentMovingPointers[0] = data;
      currentScopePointers[0] = s[currentScopeIndex - 1];
      currentScopePointers[1] = s[currentScopeIndex];
    }
  }
  return result.join('') === s;
}
