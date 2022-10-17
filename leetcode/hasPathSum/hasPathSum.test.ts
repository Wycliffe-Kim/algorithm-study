import { TreeNode } from '../TreeNode';
import { hasPathSum } from './hasPathSum';

test('root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22', () => {
  const root = new TreeNode(5);
  root.left = new TreeNode(4);
  root.left.left = new TreeNode(11);
  root.left.left.left = new TreeNode(7);
  root.left.left.right = new TreeNode(2);
  root.right = new TreeNode(8);
  root.right.left = new TreeNode(13);
  root.right.right = new TreeNode(4);
  root.right.right.right = new TreeNode(1);
  const result = hasPathSum(root, 22);
  expect(result).toBe(true);
});

test('root = [1,2,3], targetSum = 5', () => {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  const result = hasPathSum(root, 5);
  expect(result).toBe(false);
});

test('root = null, targetSum = 0', () => {
  const root = null;
  const result = hasPathSum(root, 0);
  expect(result).toBe(false);
});

test('root = [1,2], targetSum = 0', () => {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  const result = hasPathSum(root, 1);
  expect(result).toBe(false);
});
