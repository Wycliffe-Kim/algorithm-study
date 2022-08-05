import { TreeNode } from '../TreeNode';

const concat = (data: number[], val?: number) =>
  val ? data.concat(val) : data;

const preorder = (node: TreeNode | null, result: number[]) => {
  let _result = [...result];
  if (node) {
    _result = concat(_result, node.val);
    _result = preorder(node.left, _result);
    _result = preorder(node.right, _result);
  }
  return _result;
};

export function preorderTraversal(root: TreeNode | null): number[] {
  let result: number[] = [];
  if (!root) {
    return [];
  }

  if (!root.left && !root.right) {
    return concat(result, root.val);
  }

  result = preorder(root, result);

  return result;
}
