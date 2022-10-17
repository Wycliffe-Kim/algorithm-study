import { TreeNode } from '../TreeNode';
import { isValidBST } from './isValidBST';

test('root = [2,1,3]', () => {
  const root = new TreeNode(2);
  root.left = new TreeNode(1);
  root.right = new TreeNode(3);

  const result = isValidBST(root);
  expect(result).toBe(true);
});

test('root = [5,1,4,null,null,3,6]', () => {
  const root = new TreeNode(5);
  root.left = new TreeNode(1);
  root.right = new TreeNode(4);
  root.right.left = new TreeNode(3);
  root.right.right = new TreeNode(6);

  const result = isValidBST(root);
  expect(result).toBe(false);
});

test('root = [2,2,2]', () => {
  const root = new TreeNode(2);
  root.left = new TreeNode(2);
  root.right = new TreeNode(2);

  const result = isValidBST(root);
  expect(result).toBe(false);
});

test('root = [5,4,6,null,null,3,7]', () => {
  const root = new TreeNode(5);
  root.left = new TreeNode(4);
  root.right = new TreeNode(6);
  root.right.left = new TreeNode(3);
  root.right.right = new TreeNode(7);

  const result = isValidBST(root);
  expect(result).toBe(false);
});

test('root = [0,null,-1]', () => {
  const root = new TreeNode(0);
  root.right = new TreeNode(-1);

  const result = isValidBST(root);
  expect(result).toBe(false);
});
