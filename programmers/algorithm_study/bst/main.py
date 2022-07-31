from pydash import map_
from algorithm_study.bst.node import Node
from algorithm_study.bst.tree import BinarySearchTree


def main():
    a = Node[int, str](5, 'John')
    b = Node[int, str](2, 'David')
    c = Node[int, str](8, 'Mary')
    d = Node[int, str](1, 'Patrick')
    e = Node[int, str](4, 'Sue')
    f = Node[int, str](6, 'Anne')
    g = Node[int, str](9, 'Clara')
    h = Node[int, str](7, 'Peter')
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
