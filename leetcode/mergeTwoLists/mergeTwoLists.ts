import { ListNode } from '../ListNode';

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

export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1 && !list2) {
    return null;
  }

  const _list1 = ListNode.toList(list1);
  const _list2 = ListNode.toList(list2);
  const nums = new Array<number>().concat(_list1, _list2);
  const m = _list1.length;
  const n = _list2.length;
  const tempResultForMerge = new Array<number>(m + n);
  mergeSort(tempResultForMerge, nums, 0, m + n - 1);

  return ListNode.fromList(nums);
}
