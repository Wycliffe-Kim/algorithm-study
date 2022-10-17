import { ListNode } from '../ListNode';
import { deleteDuplicates } from './deleteDuplicates';

test('head = [1,1,2]', () => {
  const head = ListNode.fromList([1, 1, 2]);
  const result = ListNode.toList(deleteDuplicates(head));
  expect(JSON.stringify(result)).toBe('[1,2]');
});

test('head = [1,1,2,3,3]', () => {
  const head = ListNode.fromList([1, 1, 2, 3, 3]);
  const result = ListNode.toList(deleteDuplicates(head));
  expect(JSON.stringify(result)).toBe('[1,2,3]');
});

test('head = [1,1,1,1,1,1]', () => {
  const head = ListNode.fromList([1, 1, 1, 1, 1, 1]);
  const result = ListNode.toList(deleteDuplicates(head));
  expect(JSON.stringify(result)).toBe('[1]');
});
