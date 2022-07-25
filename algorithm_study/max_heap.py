from typing import TypeVar, Generic, Callable
from pydash import map_
from algorithm_study.map_heap_item import MaxHeapItem

K = TypeVar('K')
V = TypeVar('V')


class MaxHeap(Generic[K, V]):
    def __init__(self):
        self._data = list[MaxHeapItem[K, V]]([MaxHeapItem(None, None)])

    def insert(self, item: MaxHeapItem[K, V]):
        self._data.append(item)
        curr = len(self._data) - 1
        parent = curr // 2
        while self._data[parent].key is not None and self._data[curr].key > self._data[parent].key:
            self._data[curr], self._data[parent] = self._data[parent], self._data[curr]
            curr = parent
            parent = parent // 2

        return self

    def map(self, func: Callable[[MaxHeapItem[K, V]], MaxHeapItem[K, V]]) -> list[MaxHeapItem[K, V]]:
        map_(self._data, func)
