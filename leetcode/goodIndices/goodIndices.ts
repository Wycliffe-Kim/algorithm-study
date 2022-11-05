// order를 검사하는 부분이 왠지 dp를 적용해야 하는 부분인 거 같다.
// time limit에 걸렸으니 한번 체크해보자.

const range = (start: number, end: number) =>
  Array.from({ length: end - start }, (_, i) => i + start);

const checkOrder = (isIncreasing: boolean) => (data: number[]) =>
  data.reduce(
    (result, currentValue, currentIndex) =>
      currentIndex === 0
        ? result
        : result &&
          (isIncreasing === true
            ? currentValue >= data[currentIndex - 1]
            : currentValue <= data[currentIndex - 1]),
    true
  );

export function goodIndices(nums: number[], k: number): number[] {
  const n = nums.length;
  if (k >= n - k) {
    return [];
  }

  const indexes = range(k, n - k);
  const isDecreasingOrder = checkOrder(false);
  const isIncreasingOrder = checkOrder(true);
  const result = indexes.filter((index) => {
    const nonIncreasingOrderStartIndex = index - k;
    const nonDecreasingOrderStartIndex = index + 1;
    return (
      isDecreasingOrder(
        nums.slice(
          nonIncreasingOrderStartIndex,
          nonIncreasingOrderStartIndex + k
        )
      ) &&
      isIncreasingOrder(
        nums.slice(
          nonDecreasingOrderStartIndex,
          nonDecreasingOrderStartIndex + k
        )
      )
    );
  });

  return result;
}
