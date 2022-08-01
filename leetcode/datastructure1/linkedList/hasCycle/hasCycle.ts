/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function hasCycle(head: ListNode | null): boolean {
  type Node = ListNode | null;
  type ListForCheck = Node[];

  const hasNodeInList = (listForCheck: ListForCheck, node: Node) => {
    for (let _node of listForCheck) {
      if (_node === node) {
        return true;
      }
    }

    return false;
  };

  const isNextNullAtLeastOnce = (listForCheck: ListForCheck, head: Node) => {
    let next = head;
    while (!hasNodeInList(listForCheck, next)) {
      listForCheck.push(next);
      if (!next) {
        return false;
      }
      next = next.next;
    }

    return true;
  };

  const listForCheck: ListForCheck = [];
  return isNextNullAtLeastOnce(listForCheck, head);
}
