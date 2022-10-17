import { ListNode } from '../ListNode';
import { mergeTwoLists } from './mergeTwoLists';

test('list1 = [1,2,4], list2 = [1,3,4]', () => {
  const list1 = new ListNode(1);
  const list1_1 = new ListNode(2);
  const list1_2 = new ListNode(4);
  const list2 = new ListNode(1);
  const list2_1 = new ListNode(3);
  const list2_2 = new ListNode(4);
  list1.next = list1_1;
  list1_1.next = list1_2;
  list2.next = list2_1;
  list2_1.next = list2_2;
  const result = ListNode.toList(mergeTwoLists(list1, list2));
  expect(JSON.stringify(result)).toBe('[1,1,2,3,4,4]');
});

test('list1 = [], list2 = []', () => {
  const result = ListNode.toList(mergeTwoLists(null, null));
  expect(JSON.stringify(result)).toBe('[]');
});

test('list1 = [], list2 = [0]', () => {
  const result = ListNode.toList(mergeTwoLists(null, new ListNode(0)));
  expect(JSON.stringify(result)).toBe('[0]');
});

test('list1 = [1], list2 = []', () => {
  const result = ListNode.toList(mergeTwoLists(new ListNode(1), null));
  expect(JSON.stringify(result)).toBe('[1]');
});
