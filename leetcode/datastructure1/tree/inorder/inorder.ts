import { TreeNode } from '../TreeNode';

const concat = (data: number[], val?: number) =>
  val ? data.concat(val) : data;

const inorder = (node: TreeNode | null, result: number[]) => {
  let _result = [...result];
  if (node) {
    _result = inorder(node.left, _result);
    _result = concat(_result, node.val);
    _result = inorder(node.right, _result);
  }
  return _result;
};

export function inorderTraversal(root: TreeNode | null): number[] {
  return inorder(root, []);
}
