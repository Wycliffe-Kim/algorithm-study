from typing import Generic, TypeVar

T = TypeVar('T')


class Node(Generic[T]):
    data: T
    left: Node[T] | None
    right: Node[T] | None

    def __init__(self, item: T):
        self.data = item
        self.left = None
        self.right = None

    def size(self):
        left_size = self.left.size() if self.left is not None else 0
        right_size = self.right.size() if self.right is not None else 0
        return left_size + right_size + 1

    def depth(self):
        left_depth = self.left.depth() if self.left is not None else 0
        right_depth = self.right.depth() if self.left is not None else 0
        return (left_depth if left_depth > right_depth else right_depth) + 1
