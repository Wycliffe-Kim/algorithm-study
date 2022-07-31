const _merge = (
  result: number[],
  nums: number[],
  left: number,
  right: number,
  mid: number
) => {
  let i = left;
  let j = mid + 1;
  let k = left;

  while (i <= mid && j <= right) {
    if (nums[i] <= nums[j]) {
      result[k++] = nums[i++];
    } else {
      result[k++] = nums[j++];
    }
  }

  if (i > mid) {
    for (let l = j; l <= right; l++) {
      result[k++] = nums[l];
    }
  } else {
    for (let l = i; l <= mid; l++) {
      result[k++] = nums[l];
    }
  }

  for (let l = left; l <= right; l++) {
    nums[l] = result[l];
  }
};

const mergeSort = (
  result: number[],
  nums: number[],
  left: number,
  right: number
) => {
  if (left < right) {
    const mid = Math.floor((left + right) / 2);
    mergeSort(result, nums, left, mid);
    mergeSort(result, nums, mid + 1, right);
    _merge(result, nums, left, right, mid);
  }
};

export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): number[] {
  const _nums = nums1.slice(0, m).concat(nums2.slice(0, n));
  const result = new Array<number>(m + n);
  mergeSort(result, _nums, 0, m + n - 1);
  return _nums;
}
