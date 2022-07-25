from algorithm_study.node import Node
from algorithm_study.binary_tree import BinaryTree


def main():
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

    a.left = b
    a.right = c

    b.left = d
    b.right = e

    c.left = f
    c.right = g

    d.left = h
    d.right = i

    f.right = j

    i.right = k

    tree = BinaryTree[int](a)
    print('size', tree.size())
    print('depth', tree.depth())
