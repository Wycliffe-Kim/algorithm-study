import { Stack } from './Stack';

test('', () => {
  const stack = new Stack<number>();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  expect(stack.pop()).toBe(4);
  expect(stack.pop()).toBe(3);
  expect(stack.pop()).toBe(2);
  expect(stack.pop()).toBe(1);
});
