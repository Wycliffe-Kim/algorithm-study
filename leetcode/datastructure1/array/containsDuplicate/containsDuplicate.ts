export function containsDuplicate(nums: number[]): boolean {
  const keyValuePairs = new Map<number, number>();
  nums.forEach((num) => {
    if (keyValuePairs.has(num)) {
      const value = keyValuePairs.get(num);
      if (value) {
        keyValuePairs.set(num, value + 1);
      }
    } else {
      keyValuePairs.set(num, 1);
    }
  });

  let result = false;
  keyValuePairs.forEach((value) => {
    if (result) {
      return;
    }

    if (value > 1) {
      result = true;
    }
  });

  return result;
}
