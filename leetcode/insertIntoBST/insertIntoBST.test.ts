import { pipe3 } from '../../../functions/pipe';
import { bft } from '../bft/bft';
import { TreeNode } from '../TreeNode';
import { insertIntoBST } from './insertIntoBST';

const _insertIntoBST = (val: number) => (node: TreeNode | null) =>
  insertIntoBST(node, val);

test('root = [4,2,7,1,3], val = 5', () => {
  let root: TreeNode | null = new TreeNode(4);
  root.left = new TreeNode(2);
  root.right = new TreeNode(7);
  root.left.left = new TreeNode(1);
  root.left.right = new TreeNode(3);

  const doJob = pipe3(_insertIntoBST(5), bft, JSON.stringify);
  const result = doJob(root);

  expect(result).toBe('[4,2,7,1,3,5]');
});

test('root = [40,20,60,10,30,50,70], val = 25', () => {
  let root: TreeNode | null = new TreeNode(40);
  root.left = new TreeNode(20);
  root.right = new TreeNode(60);
  root.left.left = new TreeNode(10);
  root.left.right = new TreeNode(30);
  root.right.left = new TreeNode(50);
  root.right.right = new TreeNode(70);

  const doJob = pipe3(_insertIntoBST(25), bft, JSON.stringify);
  const result = doJob(root);

  expect(result).toBe('[40,20,60,10,30,50,70,25]');
});
