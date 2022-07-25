from typing import Generic, TypeVar, Any
from pydash import concat

T = TypeVar('T')


class Node(Generic[T]):
    def __init__(self, item: T, *, left: Any = None, right: Any = None):
        self.__data = item
        self.__left = left
        self.__right = right

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
            self.__data,
            self.__right.inorder() if self.__right is not None else []
        )

    def preorder(self):
        return concat(
            self.__data,
            self.__left.inorder() if self.__left is not None else [],
            self.__right.inorder() if self.__right is not None else []
        )

    def postorder(self):
        return concat(
            self.__left.inorder() if self.__left is not None else [],
            self.__right.inorder() if self.__right is not None else [],
            self.__data
        )
