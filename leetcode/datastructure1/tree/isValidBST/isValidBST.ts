import { inorderTraversal } from '../inorder/inorder';
import { TreeNode } from '../TreeNode';

export function isValidBST(root: TreeNode | null): boolean {
  // if (root) {
  //   if (root.left) {
  //     if (root.left.val >= root.val) {
  //       return false;
  //     } else if (root.left.val < root.val) {
  //       if (!isValidBST(root.left)) {
  //         return false;
  //       }
  //       if (!isValidBST(root.left.left)) {
  //         return false;
  //       }
  //       if (!isValidBST(root.left.right)) {
  //         return false;
  //       }
  //     }
  //   }

  //   if (root.right) {
  //     if (root.right.val <= root.val) {
  //       return false;
  //     } else if (root.right.val > root.val) {
  //       if (!isValidBST(root.right)) {
  //         return false;
  //       }
  //       if (!isValidBST(root.right.left)) {
  //         return false;
  //       }
  //       if (!isValidBST(root.right.right)) {
  //         return false;
  //       }
  //     }
  //   }
  // }

  // return true;

  const data = inorderTraversal(root);
  for (let i = 1; i < data.length; i++) {
    if (data[i - 1] >= data[i]) {
      return false;
    }
  }
  return true;
}
