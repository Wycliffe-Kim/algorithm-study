import { ListNode } from '../ListNode';

export function removeNthFromEnd(
  head: ListNode | null,
  n: number
): ListNode | null {
  if (head && !head.next) {
    return null;
  }

  let first: ListNode | null = head;
  let second: ListNode | null = head;

  for (let i = 0; i < n; i++) {
    first = first ? first.next : null;
  }

  if (!first && head) {
    return head.next;
  }

  let prev: ListNode | null = null;
  while (first) {
    if (!first.next) {
      prev = second;
    }
    first = first.next;
    if (second) {
      second = second.next;
    }
  }

  if (prev && second) {
    prev.next = second.next;
  }

  return head;
}
