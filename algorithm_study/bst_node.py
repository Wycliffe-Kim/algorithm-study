from typing import Generic, TypeVar, Any
from pydash import concat
from toolz import pipe, curry

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

    def has_left(self):
        return self.__left is not None

    def has_right(self):
        return self.__right is not None

    def contruct(self, *, left: Any = None, right: Any = None):
        self.__left = left
        self.__right = right

    def size(self):
        left_size = self.__left.size() if self.has_left() else 0
        right_size = self.__right.size() if self.has_right() else 0
        return left_size + right_size + 1

    def depth(self):
        left_depth = self.__left.depth() if self.has_left() else 1
        right_depth = self.__right.depth() if self.has_right() else 1
        return (left_depth if left_depth > right_depth else right_depth) + 1

    def inorder(self):
        return concat(
            self.__left.inorder() if self.has_left() else [],
            self,
            self.__right.inorder() if self.has_right() else []
        )

    def min(self):
        return self.__left.min() if self.has_left() else self

    def max(self):
        return self.__right.max() if self.has_right() else self

    def lookup(self, key: T1, parent: Any = None):
        def caseSelfBigger(self, key: T1, parent: Any):
            return self.__left.lookup(key, parent) if self.has_left() else {"self": None, "parent": None}

        def caseSelfSmaller(self, key: T1, parent: Any):
            return self.__right.lookup(key, parent) if self.has_right() else {"self": None, "parent": None}

        if self.__key > key:
            return caseSelfBigger(self, key, parent)
        elif self.__key < key:
            return caseSelfSmaller(self, key, parent)

        return {"self": self, "parent": parent}

    def insert(self, key: T1, value: T2):
        def caseSelfBigger(self, key: T1, value: T2):
            if self.has_left():
                self.__left.insert(key, value)
            else:
                self.__left = BstNode[T1, T2](key, value)

        def caseSelfSmaller(self, key: T1, value: T2):
            if self.has_right():
                self.__right.insert(key, value)
            else:
                self.__right = BstNode[T1, T2](key, value)

        if self.__key > key:
            caseSelfBigger(self, key, value)
        elif self.__key < key:
            caseSelfSmaller(self, key, value)
        # else:
        #     raise KeyError(f'key "{key}" already exists!')

    def count_children(self):
        count_left = curry(lambda self, count:
                           count + 1 if self.has_left() else count)
        count_right = curry(lambda self, count:
                            count + 1 if self.has_right() else count)
        count = pipe(count_left(self), count_right(self))
        return count(0)
