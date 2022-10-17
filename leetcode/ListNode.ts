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

  static fromList = (list: number[]) => {
    if (list.length === 0) {
      return null;
    }

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

    let popResult = pop(list);
    const result = new ListNode(popResult.value);
    let tempNode = result;
    while (popResult.list.length) {
      popResult = pop(popResult.list);
      tempNode.next = new ListNode(popResult.value);
      tempNode = tempNode.next;
    }
    return result;
  };
}
