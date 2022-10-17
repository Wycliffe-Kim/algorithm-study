import { pipe3 } from '../../../functions/pipe';
import { ListNode } from '../ListNode';

export function removeElements(
  head: ListNode | null,
  val: number
): ListNode | null {
  const toFilteredList = (val: number) => (list: number[]) =>
    list.filter((value) => value !== val);
  const doJob = pipe3(ListNode.toList, toFilteredList(val), ListNode.fromList);
  return doJob(head);
}
