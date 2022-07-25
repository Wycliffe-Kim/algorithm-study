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
