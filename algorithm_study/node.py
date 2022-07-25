from typing import Generic, TypeVar

T = TypeVar('T')


class Node(Generic[T]):
    __data: T
    __left: Node[T] | None
    __right: Node[T] | None

    def __init__(self, item: T):
        self.__data = item
        self.__left = None
        self.__right = None

    @property
    def item(self):
        return self.__data

    def size(self):
        left_size = self.__left.size() if self.__left is not None else 0
        right_size = self.__right.size() if self.__right is not None else 0
        return left_size + right_size + 1
