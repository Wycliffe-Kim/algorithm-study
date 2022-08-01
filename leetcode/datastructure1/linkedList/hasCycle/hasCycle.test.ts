import { hasCycle, ListNode } from './hasCycle';

test('head = [3,2,0,-4], pos = 1', () => {
  const head = new ListNode(3);
  const next2 = new ListNode(2);
  const next0 = new ListNode(0);
  const next_4 = new ListNode(-4);

  head.next = next2;
  next2.next = next0;
  next0.next = next_4;
  next_4.next = next2;

  const result = hasCycle(head);
  expect(result).toBe(true);
});

test('head = [1,2], pos = 0', () => {
  const head = new ListNode(1);
  const next = new ListNode(2);

  head.next = next;
  next.next = head;

  const result = hasCycle(head);
  expect(result).toBe(true);
});

test('head = [1], pos = -1', () => {
  const head = new ListNode(1);

  const result = hasCycle(head);
  expect(result).toBe(false);
});
