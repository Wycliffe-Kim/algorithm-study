import { TreeNode } from '../TreeNode';

type Node = TreeNode | null;
type PopReturn<T> = {
  node: T;
  queue: T[];
};

const push = <T>(queue: T[], node: T) => queue.concat(node);

const pop = <T>(queue: T[], defaultVal: T): PopReturn<T> =>
  queue.length > 0
    ? {
        node: queue[0],
        queue: queue.slice(1, queue.length),
      }
    : {
        node: defaultVal,
        queue,
      };

const empty = <T>(queue: T[]) => queue.length === 0;

export const bft = (node: Node) => {
  let result: number[] = [];
  let tempQueue: Node[] = [node];
  while (!empty(tempQueue)) {
    const { queue, node } = pop(tempQueue, null);
    tempQueue = [...queue];
    if (node) {
      result = push(result, node?.val);
      if (node.left) {
        tempQueue = push(tempQueue, node.left);
      }
      if (node.right) {
        tempQueue = push(tempQueue, node.right);
      }
    }
  }

  return result;
};
