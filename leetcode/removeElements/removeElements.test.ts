import { ListNode } from '../ListNode';
import { removeElements } from './removeElements';

test('head = [1,2,6,3,4,5,6], val = 6', () => {
  const list = [1, 2, 6, 3, 4, 5, 6];
  const val = 6;
  const head = ListNode.fromList(list);
  const result = removeElements(head, val);
  expect(JSON.stringify(ListNode.toList(result))).toBe('[1,2,3,4,5]');
});

test('head = [], val = 1', () => {
  const list: number[] = [];
  const val = 1;
  const head = ListNode.fromList(list);
  const result = removeElements(head, val);
  expect(JSON.stringify(ListNode.toList(result))).toBe('[]');
});

test('head = [7,7,7,7], val = 7', () => {
  const list = [7, 7, 7, 7];
  const val = 7;
  const head = ListNode.fromList(list);
  const result = removeElements(head, val);
  expect(JSON.stringify(ListNode.toList(result))).toBe('[]');
});
