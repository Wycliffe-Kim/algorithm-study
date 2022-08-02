export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  static toList = (node: ListNode | null) => {
    const result = [];
    let next = node;
    while (next) {
      result.push(next.val);
      next = next.next;
    }

    return result;
  };
}
