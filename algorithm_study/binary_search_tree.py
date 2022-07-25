from typing import Generic, TypeVar
from queue import Queue

from algorithm_study.bst_node import BstNode

T1 = TypeVar('T1')
T2 = TypeVar('T2')


class BinarySearchTree(Generic[T1, T2]):
    def __init__(self, root: BstNode[T1, T2]):
        self.__root = root

    def size(self):
        return self.__root.size() if self.__root is not None else 0

    def depth(self):
        return self.__root.depth() if self.__root is not None else 0

    def inorder(self):
        return self.__root.inorder() if self.__root is not None else []

    def min(self):
        return self.__root.min() if self.__root is not None else None

    def max(self):
        return self.__root.max() if self.__root is not None else None

    def lookup(self, key: T1):
        return self.__root.lookup(key) if self.__root is not None else {"self": None, "parent": None}

    def insert(self, key: T1, value: T2):
        if self.__root is not None:
            self.__root.insert(key, value)
        else:
            self.__root = BstNode(key, value)
        return self
