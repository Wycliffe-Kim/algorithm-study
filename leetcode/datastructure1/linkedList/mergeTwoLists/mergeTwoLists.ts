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

  const toList = (node: ListNode | null) => {
    const result = [];
    let next = node;
    while (next) {
      result.push(next.val);
      next = next.next;
    }

    return result;
  };

  const pop = (list: number[]) => {
    type Result = { value: number; list: number[] };
    const result: Result = { value: Number.MIN_VALUE, list: [] };

    if (list.length > 0) {
      result.value = list[0];
      list = list.slice(1, list.length);
      result.list = [...list];
      return result;
    }

    return result;
  };

  const _list1 = toList(list1);
  const _list2 = toList(list2);
  const nums = new Array<number>().concat(_list1, _list2);
  const m = _list1.length;
  const n = _list2.length;
  const tempResultForMerge = new Array<number>(m + n);
  mergeSort(tempResultForMerge, nums, 0, m + n - 1);

  let popResult = pop(nums);
  const result = new ListNode(popResult.value);
  let tempNode = result;
  while (popResult.list.length) {
    popResult = pop(popResult.list);
    tempNode.next = new ListNode(popResult.value);
    tempNode = tempNode.next;
  }
  // console.log(toList(result));
  return result;
}
