import { TreeNode } from '../TreeNode';
import { preorderTraversal } from './preorder';

test('root = [1,null,2,3]', () => {
  const root = new TreeNode(1);
  const node2 = new TreeNode(2);
  const node3 = new TreeNode(3);
  root.right = node2;
  node2.left = node3;

  const result = preorderTraversal(root);
  expect(JSON.stringify(result)).toBe('[1,2,3]');
});

test('root = []', () => {
  const root = new TreeNode();

  const result = preorderTraversal(root);
  expect(JSON.stringify(result)).toBe('[]');
});

test('root = [1]', () => {
  const root = new TreeNode(1);

  const result = preorderTraversal(root);
  expect(JSON.stringify(result)).toBe('[1]');
});
