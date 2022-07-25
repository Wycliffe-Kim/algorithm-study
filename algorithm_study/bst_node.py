from typing import Generic, TypeVar, Any
from pydash import concat

T1 = TypeVar('T1')
T2 = TypeVar('T2')


class BstNode(Generic[T1, T2]):
    def __init__(self, key: T1, value: T2, *, left: Any = None, right: Any = None):
        self.__key = key
        self.__value = value
        self.__left = left
        self.__right = right

    @property
    def key(self):
        return self.__key

    @property
    def value(self):
        return self.__value

    @property
    def left(self):
        return self.__left

    @property
    def right(self):
        return self.__right

    def contruct(self, *, left: Any = None, right: Any = None):
        self.__left = left
        self.__right = right

    def size(self):
        left_size = self.__left.size() if self.__left is not None else 0
        right_size = self.__right.size() if self.__right is not None else 0
        return left_size + right_size + 1

    def depth(self):
        left_depth = self.__left.depth() if self.__left is not None else 1
        right_depth = self.__right.depth() if self.__left is not None else 1
        return (left_depth if left_depth > right_depth else right_depth) + 1

    def inorder(self):
        return concat(
            self.__left.inorder() if self.__left is not None else [],
            self,
            self.__right.inorder() if self.__right is not None else []
        )

    def min(self):
        return self.__left.min() if self.__left is not None else self

    def max(self):
        return self.__right.max() if self.__right is not None else self
