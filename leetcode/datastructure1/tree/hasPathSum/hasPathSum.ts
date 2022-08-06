import { TreeNode } from '../TreeNode';

const pathSum = (node: TreeNode | null, sum: number, targetSum: number) => {
  if (node) {
    const _sum = sum + node.val;

    if (_sum === targetSum && !node.left && !node.right) {
      return true;
    }

    if (pathSum(node.left, _sum, targetSum)) {
      return true;
    }

    if (pathSum(node.right, _sum, targetSum)) {
      return true;
    }
  }

  return false;
};

export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  return pathSum(root, 0, targetSum);
}
