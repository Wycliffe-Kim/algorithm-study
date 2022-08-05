import { TreeNode } from '../TreeNode';
import { levelOrder } from './levelOrder';

test('root = [3,9,20,null,null,15,7]', () => {
  const root = new TreeNode(3);
  const node9 = new TreeNode(9);
  const node20 = new TreeNode(20);
  const node15 = new TreeNode(15);
  const node7 = new TreeNode(7);
  root.left = node9;
  root.right = node20;
  node20.left = node15;
  node20.right = node7;
  const result = levelOrder(root);
  expect(JSON.stringify(result)).toBe('[[3],[9,20],[15,7]]');
});

test('root = [1]', () => {
  const root = new TreeNode(1);
  const result = levelOrder(root);
  expect(JSON.stringify(result)).toBe('[[1]]');
});

test('root = []', () => {
  const root = new TreeNode();
  const result = levelOrder(root);
  expect(JSON.stringify(result)).toBe('[]');
});

test('root = [1,2,3,4,5,6,7]', () => {
  const root = new TreeNode(1);
  const node2 = new TreeNode(2);
  const node3 = new TreeNode(3);
  const node4 = new TreeNode(4);
  const node5 = new TreeNode(5);
  const node6 = new TreeNode(6);
  const node7 = new TreeNode(7);
  root.left = node2;
  root.right = node3;
  node2.left = node4;
  node2.right = node5;
  node3.left = node6;
  node3.right = node7;
  const result = levelOrder(root);
  expect(JSON.stringify(result)).toBe('[[1],[2,3],[4,5,6,7]]');
});
