from typing import Callable, Generic, TypeVar
from algorithm_study.node import Node

T = TypeVar('T')


class BinaryTree(Generic[T]):
    __root: Node[T] | None

    def __init__(self, root: Node[T]):
        self.__root = root

    def size(self):
        return self.__invoke_with_condition(self.__root.size, 0)

    def depth(self):
        return self.__invoke_with_condition(self.__root.depth, 0)

    def __invoke_with_condition(self, func: Callable[[], int], default_value: int):
        return func() if self.__rooot is not None else default_value
