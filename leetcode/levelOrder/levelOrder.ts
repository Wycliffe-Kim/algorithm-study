import { TreeNode } from '../TreeNode';

type Node = TreeNode | null;

const push = (queue: Node[], node: Node) => queue.concat(node);

const depth = (node: Node) => {
  let leftDepth = 0;
  let rightDepth = 0;
  if (node) {
    leftDepth = node.left ? depth(node.left) : 0;
    rightDepth = node.right ? depth(node.right) : 0;
  }
  return leftDepth > rightDepth ? leftDepth + 1 : rightDepth + 1;
};

export function levelOrder(root: TreeNode | null): number[][] {
  let result: number[][] = [];
  if (root) {
    if (!root.left && !root.right) {
      return root.val ? [[root.val]] : [];
    }

    let queue: Node[] = [root];
    const height = depth(root);
    for (let i = 0; i < height; i++) {
      const _queue = [...queue];
      queue.length = 0;
      _queue.forEach((node) => {
        if (node) {
          if (result.length <= i) {
            result.push([node.val]);
          } else {
            result[i].push(node.val);
          }

          if (node.left) {
            queue = push(queue, node.left);
          }

          if (node.right) {
            queue = push(queue, node.right);
          }
        }
      });
    }
  }

  return result;
}
