from algorithm_study.binary_search_tree import BinarySearchTree
from algorithm_study.bst_node import BstNode
from algorithm_study.node import Node
from algorithm_study.binary_tree import BinaryTree


def print_case(case: int):
    print(f'----- case{case} -----')


def print_end():
    print('')


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
    a.contruct(left=b, right=c)
    b.contruct(left=d, right=e)
    c.contruct(left=f, right=g)
    f.contruct(right=h)
    bst = BinarySearchTree[int, str](a)
    print('inorder', bst.inorder())
    print('min', bst.min().value)
    print('max', bst.max().value)
    print('lookup', bst.lookup(1)["self"].value)
    print_end()


def main():
    case1()
    case2()
