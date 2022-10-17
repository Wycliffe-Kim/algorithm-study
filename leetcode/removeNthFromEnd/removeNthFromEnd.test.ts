import { pipe2 } from '../functions/pipe';
import { ListNode } from '../ListNode';
import { removeNthFromEnd } from './removeNthFromEnd';

test('head = [1,2,3,4,5], n = 2', () => {
  const head = ListNode.fromList([1, 2, 3, 4, 5]);
  const n = 2;
  const node = removeNthFromEnd(head, n);
  const remove = pipe2(ListNode.toList, JSON.stringify);
  const result = remove(node);
  expect(result).toBe('[1,2,3,5]');
});

test('head = [1], n = 1', () => {
  const head = ListNode.fromList([1]);
  const n = 1;
  const node = removeNthFromEnd(head, n);
  const remove = pipe2(ListNode.toList, JSON.stringify);
  const result = remove(node);
  expect(result).toBe('[]');
});

test('head = [1,2], n = 1', () => {
  const head = ListNode.fromList([1, 2]);
  const n = 1;
  const node = removeNthFromEnd(head, n);
  const remove = pipe2(ListNode.toList, JSON.stringify);
  const result = remove(node);
  expect(result).toBe('[1]');
});

test('head = [1,2], n = 2', () => {
  const head = ListNode.fromList([1, 2]);
  const n = 2;
  const node = removeNthFromEnd(head, n);
  const remove = pipe2(ListNode.toList, JSON.stringify);
  const result = remove(node);
  expect(result).toBe('[2]');
});
