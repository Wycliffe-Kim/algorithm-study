import { TreeNode } from '../TreeNode';

export function insertIntoBST(
  root: TreeNode | null,
  val: number
): TreeNode | null {
  if (root) {
    if (root.val > val) {
      root.left = insertIntoBST(root.left, val);
    } else if (root.val < val) {
      root.right = insertIntoBST(root.right, val);
    }
  } else {
    root = new TreeNode(val);
  }
  return root;
}
