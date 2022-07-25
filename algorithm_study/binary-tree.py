from typing import Generic, TypeVar
from algorithm_study.node import Node

T = TypeVar('T')


class BinaryTree(Generic[T]):
    __root: Node[T] | None

    def __init__(self, root: Node[T]):
        self.__root = root

    def size(self):
        return self.__root.size() if self.__root is not None else 0
