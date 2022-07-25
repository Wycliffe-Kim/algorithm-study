from random import random
from pydash import map_
from algorithm_study.binary_search_tree import BinarySearchTree
from algorithm_study.bst_node import BstNode
from algorithm_study.map_heap_item import MaxHeapItem
from algorithm_study.max_heap import MaxHeap
from algorithm_study.node import Node
from algorithm_study.binary_tree import BinaryTree


def print_case(case: int):
    print(f'----- case{case} -----')


def print_end():
    print('')


def generate_random_number(min: float = 0, max: float = 100):
    return random() * (max - min) + min


def case1():
    print_case(1)
    a = Node[int](0)
    b = Node[int](1)
    c = Node[int](2)
    d = Node[int](3)
    e = Node[int](4)
    f = Node[int](5)
    g = Node[int](6)
    h = Node[int](7)
    i = Node[int](8)
    j = Node[int](9)
    k = Node[int](10)

    a.contruct(left=b, right=c)
    b.contruct(left=d, right=e)
    c.contruct(left=f, right=g)
    d.contruct(left=h, right=i)
    f.contruct(right=j)
    i.contruct(right=k)

    tree = BinaryTree[int](a)
    print('size', tree.size())
    print('depth', tree.depth())
    print('inorder', tree.inorder())
    print('preorder', tree.preorder())
    print('postorder', tree.postorder())
    print('bft', tree.bft())
    print_end()


def case2():
    print_case(2)
    a = BstNode[int, str](5, 'John')
    b = BstNode[int, str](2, 'David')
    c = BstNode[int, str](8, 'Mary')
    d = BstNode[int, str](1, 'Patrick')
    e = BstNode[int, str](4, 'Sue')
    f = BstNode[int, str](6, 'Anne')
    g = BstNode[int, str](9, 'Clara')
    h = BstNode[int, str](7, 'Peter')
    a.construct(left=b, right=c)
    b.construct(left=d, right=e)
    c.construct(left=f, right=g)
    f.construct(right=h)
    bst = BinarySearchTree[int, str](a)
    print('inorder', bst.inorder())
    print('min', bst.min().value)
    print('max', bst.max().value)
    print('lookup', bst.lookup(9)["self"].value)
    result = bst.insert(3, 'test').inorder()
    print('insert', map_(
        result, lambda data: f'|key: {data.key}, value: {data.value}| '))
    print('remove', bst.remove(3).lookup(3))
    print_end()


def case3():
    print_case(3)
    max_heap = MaxHeap()

    (
        max_heap
        .insert(MaxHeapItem[float, str](generate_random_number(), f'test{generate_random_number()}'))
        .for_each(lambda item: print('insert 1', str(item)))
        .insert(MaxHeapItem[float, str](generate_random_number(), f'test{generate_random_number()}'))
        .for_each(lambda item: print('insert 2', str(item)))
        .insert(MaxHeapItem[float, str](generate_random_number(), f'test{generate_random_number()}'))
        .for_each(lambda item: print('insert 3', str(item)))
        .insert(MaxHeapItem[float, str](generate_random_number(), f'test{generate_random_number()}'))
        .for_each(lambda item: print('insert 4', str(item)))
        .insert(MaxHeapItem[float, str](generate_random_number(), f'test{generate_random_number()}'))
        .for_each(lambda item: print('insert 5', str(item)))
        .insert(MaxHeapItem[float, str](generate_random_number(), f'test{generate_random_number()}'))
        .for_each(lambda item: print('insert 6', str(item)))
        .insert(MaxHeapItem[float, str](generate_random_number(), f'test{generate_random_number()}'))
        .for_each(lambda item: print('insert 7', str(item)))
        .insert(MaxHeapItem[float, str](generate_random_number(), f'test{generate_random_number()}'))
        .for_each(lambda item: print('insert 8', str(item)))
        .insert(MaxHeapItem[float, str](generate_random_number(), f'test{generate_random_number()}'))
        .for_each(lambda item: print('insert 9', str(item)))
        .insert(MaxHeapItem[float, str](generate_random_number(), f'test{generate_random_number()}'))
        .for_each(lambda item: print('insert 10', str(item)))
        .remove(lambda item: print('----- remove 1', str(item)))
        # .for_each(lambda item: print('remove 1', str(item)))
        .remove(lambda item: print('----- remove 2', str(item)))
        # .for_each(lambda item: print('remove 2', str(item)))
        .remove(lambda item: print('----- remove 3', str(item)))
        # .for_each(lambda item: print('remove 3', str(item)))
        .remove(lambda item: print('----- remove 4', str(item)))
        # .for_each(lambda item: print('remove 4', str(item)))
        .remove(lambda item: print('----- remove 5', str(item)))
        # .for_each(lambda item: print('remove 5', str(item)))
        .remove(lambda item: print('----- remove 6', str(item)))
        # .for_each(lambda item: print('remove 6', str(item)))
        .remove(lambda item: print('----- remove 7', str(item)))
        # .for_each(lambda item: print('remove 7', str(item)))
        .remove(lambda item: print('----- remove 8', str(item)))
        # .for_each(lambda item: print('remove 8', str(item)))
        .remove(lambda item: print('----- remove 9', str(item)))
        # .for_each(lambda item: print('remove 9', str(item)))
        .remove(lambda item: print('----- remove 10', str(item)))
        # .for_each(lambda item: print('remove 10', str(item)))
    )
    print_end()


def main():
    case1()
    case2()
    case3()
