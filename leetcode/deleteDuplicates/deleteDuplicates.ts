import { ListNode } from '../ListNode';

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head) {
    let next = head.next;
    while (head.val === next?.val) {
      head.next = next.next;
      next = next.next;
    }
    deleteDuplicates(head.next);
  }

  return head;
}
