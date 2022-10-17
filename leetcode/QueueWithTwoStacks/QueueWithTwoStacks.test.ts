import { QueueWithTwoStacks } from './QueueWithTwoStacks';

test('', () => {
  const queue = new QueueWithTwoStacks();
  queue.push(1);
  expect(JSON.stringify(queue.data())).toBe('[1]');
  queue.push(2);
  expect(JSON.stringify(queue.data())).toBe('[1,2]');
  expect(queue.peek()).toBe(1);
  expect(JSON.stringify(queue.data())).toBe('[1,2]');
  expect(queue.pop()).toBe(1);
  expect(JSON.stringify(queue.data())).toBe('[2]');
  expect(queue.empty()).toBe(false);
  expect(queue.peek()).toBe(2);
  expect(JSON.stringify(queue.data())).toBe('[2]');
  expect(queue.pop()).toBe(2);
  expect(JSON.stringify(queue.data())).toBe('[]');
  expect(queue.empty()).toBe(true);
});
