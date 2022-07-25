from typing import TypeVar, Generic

K = TypeVar('K')
V = TypeVar('V')


class MaxHeapItem(Generic[K, V]):
    def __init__(self, key: K, value: V):
        self._key = key
        self._value = value

    @property
    def key(self):
        return self._key

    @property
    def value(self):
        return self._value

    def __str__(self):
        return f'key: {self._key}, value: {self._value}'
