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

    @staticmethod
    def is_valid(node):
        return node is not None

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
        return BstNode.is_valid(self.__left)

    def has_right(self):
        return BstNode.is_valid(self.__right)

    def construct(self, *, left: Any = None, right: Any = None):
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
        def get(self, parent): return {"self": self, "parent": parent}

        def case_self_bigger(self, key: T1):
            return self.__left.lookup(key, self) if self.has_left() else get(None, None)

        def case_self_smaller(self, key: T1):
            return self.__right.lookup(key, self) if self.has_right() else get(None, None)

        if self.__key > key:
            return case_self_bigger(self, key)
        elif self.__key < key:
            return case_self_smaller(self, key)

        return get(self, parent)

    def insert(self, key: T1, value: T2):
        def case_self_bigger(self, key: T1, value: T2):
            if self.has_left():
                self.__left.insert(key, value)
            else:
                self.__left = BstNode[T1, T2](key, value)

        def case_self_smaller(self, key: T1, value: T2):
            if self.has_right():
                self.__right.insert(key, value)
            else:
                self.__right = BstNode[T1, T2](key, value)

        if self.__key > key:
            case_self_bigger(self, key, value)
        elif self.__key < key:
            case_self_smaller(self, key, value)
        # else:
        #     raise KeyError(f'key "{key}" already exists!')

    def count_children(self):
        count_left = curry(lambda self, count:
                           count + 1 if self.has_left() else count)
        count_right = curry(lambda self, count:
                            count + 1 if self.has_right() else count)

        def count(value): return pipe(
            value, count_left(self), count_right(self))

        return count(0)
