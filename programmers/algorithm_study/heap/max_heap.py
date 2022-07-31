from toolz import curry
from typing import TypeVar, Generic, Callable
from pydash import for_each as _for_each
from algorithm_study.heap.max_heap_item import MaxHeapItem

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

    def remove(self, func: Callable[[MaxHeapItem[K, V]], None] = None):
        if len(self._data) > 1:
            self._data[1], self._data[-1] = self._data[-1], self._data[1]
            data = self._data.pop(-1)
            if data is not None and func is not None:
                func(data)
            self._data = self.__max_heapify(1, self._data)
        return self

    def for_each(self, func: Callable[[MaxHeapItem[K, V]], None]):
        _for_each(self._data, func)
        return self

    def __max_heapify(self, index: int, data: list[MaxHeapItem[K, V]]):
        # 왼쪽 자식 (left child) 의 인덱스를 계산합니다.
        left = 2 * index
        # 오른쪽 자식 (right child) 의 인덱스를 계산합니다.
        right = 2 * index + 1

        smallest = index
        # print('__max_heapify - index, left, right', index, left, right)

        _valid_index = curry(lambda data, index: index >=
                             0 and index < len(data))
        __compare_data = curry(lambda data, index1,
                               index2: data[index2].key > data[index1].key)

        valid_index = _valid_index(data)
        _compare_data = __compare_data(data)
        compare_data = _compare_data(smallest)

        valid_left = valid_index(left)
        valid_right = valid_index(right)
        valid_smallest = valid_index(smallest)

        valid_indexes = valid_left and valid_right and valid_smallest

        condition_left1 = valid_indexes and compare_data(
            left) and _compare_data(right, left)
        condition_left2 = valid_left and not valid_right and compare_data(left)

        condition_right1 = valid_indexes and compare_data(
            right) and _compare_data(left, right)
        condition_right2 = valid_right and not valid_left and compare_data(
            right)

        # 왼쪽 자식이 존재하는지, 그리고 왼쪽 자식의 (키) 값이 (무엇보다?) 더 큰지를 판단합니다.
        if condition_left1 or condition_left2:
            # 조건이 만족하는 경우, smallest 는 왼쪽 자식의 인덱스를 가집니다.
            smallest = left

        # 오른쪽 자식이 존재하는지, 그리고 오른쪽 자식의 (키) 값이 (무엇보다?) 더 큰지를 판단합니다.
        elif condition_right1 or condition_right2:
            # 조건이 만족하는 경우, smallest 는 오른쪽 자식의 인덱스를 가집니다.
            smallest = right

        if smallest != index:
            # 현재 노드 (인덱스 i) 와 최댓값 노드 (왼쪽 아니면 오른쪽 자식) 를 교체합니다.
            data[index], data[smallest] = data[smallest], data[index]

            # 재귀적 호출을 이용하여 최대 힙의 성질을 만족할 때까지 트리를 정리합니다.
            data = self.__max_heapify(smallest, data)

        return data
