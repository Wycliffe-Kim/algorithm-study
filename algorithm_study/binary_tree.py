from typing import Generic, TypeVar
from algorithm_study.node import Node
from queue import Queue

T = TypeVar('T')


class BinaryTree(Generic[T]):
    def __init__(self, root: Node[T]):
        self.__root = root

    def size(self):
        return self.__root.size() if self.__root is not None else 0

    def depth(self):
        return self.__root.depth() if self.__root is not None else 0

    def inorder(self):
        return self.__root.inorder() if self.__root is not None else []

    def preorder(self):
        return self.__root.preorder() if self.__root is not None else []

    def postorder(self):
        return self.__root.postorder() if self.__root is not None else []

    def bft(self):
        traversal = []
        queue = Queue()
        queue.put(self.__root)
        while queue.empty() is False:
            elem = queue.get()
            traversal.append(elem.data)
            if elem.left is not None:
                queue.put(elem.left)
            if elem.right is not None:
                queue.put(elem.right)

        return traversal
