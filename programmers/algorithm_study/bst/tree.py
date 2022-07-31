from toolz import pipe, curry
from typing import Generic, TypeVar
from algorithm_study.bst.node import Node

T1 = TypeVar('T1')
T2 = TypeVar('T2')


class BinarySearchTree(Generic[T1, T2]):
    def __init__(self, root: Node[T1, T2]):
        self.__root = root

    def __has_root(self):
        return self.__root is not None

    def size(self):
        return self.__root.size() if self.__has_root() else 0

    def depth(self):
        return self.__root.depth() if self.__has_root() else 0

    def inorder(self):
        return self.__root.inorder() if self.__has_root() else []

    def min(self):
        return self.__root.min() if self.__has_root() else None

    def max(self):
        return self.__root.max() if self.__has_root() else None

    def lookup(self, key: T1):
        return self.__root.lookup(key) if self.__has_root() else {"self": None, "parent": None}

    def insert(self, key: T1, value: T2):
        if self.__has_root():
            self.__root.insert(key, value)
        else:
            self.__root = Node(key, value)
        return self

    def remove(self, key):
        # The simplest case of no children
        def _case_count_0(children_count, dict):
            node = dict["node"]
            parent = dict["parent"]
            self = dict["self"]
            if children_count == 0:
                # 만약 parent 가 있으면
                # node 가 왼쪽 자식인지 오른쪽 자식인지 판단하여
                # parent.left 또는 parent.right 를 None 으로 하여
                # leaf node 였던 자식을 트리에서 끊어내어 없앱니다.
                if Node.is_valid(parent):
                    if parent.left == node:
                        parent.construct(left=None, right=parent.right)
                    else:
                        parent.construct(left=parent.left, right=None)
                # 만약 parent 가 없으면 (node 는 root 인 경우)
                # self.root 를 None 으로 하여 빈 트리로 만듭니다.
                else:
                    self.root = None
            return dict

        # When the node has only one child
        def _case_count_1(children_count, dict):
            node = dict["node"]
            parent = dict["parent"]
            self = dict["self"]
            if children_count == 1:
                # 하나 있는 자식이 왼쪽인지 오른쪽인지를 판단하여
                # 그 자식을 어떤 변수가 가리키도록 합니다.
                if Node.is_valid(node.left):
                    child = node.left
                else:
                    child = node.right
                # 만약 parent 가 있으면
                # node 가 왼쪽 자식인지 오른쪽 자식인지 판단하여
                # 위에서 가리킨 자식을 대신 node 의 자리에 넣습니다.
                if Node.is_valid(parent):
                    if parent.left == node:
                        parent.construct(left=child, right=parent.right)
                    else:
                        parent.construct(left=parent.left, right=child)
                # 만약 parent 가 없으면 (node 는 root 인 경우)
                # self.root 에 위에서 가리킨 자식을 대신 넣습니다.
                else:
                    self.root = child
            return dict

        # When the node has both left and right children
        def _case_count_2(children_count, dict):
            node = dict["node"]
            parent = dict["parent"]
            self = dict["self"]
            if children_count == 2:
                parent = node
                successor = node.right
                # parent 는 node 를 가리키고 있고,
                # successor 는 node 의 오른쪽 자식을 가리키고 있으므로
                # successor 로부터 왼쪽 자식의 링크를 반복하여 따라감으로써
                # 순환문이 종료할 때 successor 는 바로 다음 키를 가진 노드를,
                # 그리고 parent 는 그 노드의 부모 노드를 가리키도록 찾아냅니다.
                while Node.is_valid(successor.left):
                    parent = successor
                    successor = successor.left
                # 삭제하려는 노드인 node 에 successor 의 key 와 data 를 대입합니다.
                node.key = successor.key
                node.data = successor.data
                # 이제, successor 가 parent 의 왼쪽 자식인지 오른쪽 자식인지를 판단하여
                # 그에 따라 parent.left 또는 parent.right 를
                # successor 가 가지고 있던 (없을 수도 있지만) 자식을 가리키도록 합니다.
                if parent.left == successor:
                    parent.construct(left=successor.right, right=parent.right)
                else:
                    parent.construct(left=parent.left, right=successor.right)

            return self

        case_count_0 = curry(_case_count_0)
        case_count_1 = curry(_case_count_1)
        case_count_2 = curry(_case_count_2)

        lookup_dict = self.lookup(key)
        node = lookup_dict["self"]
        parent = lookup_dict["parent"]

        if node:
            children_count = node.count_children()

            def do(dict):
                return pipe(
                    dict,
                    case_count_0(children_count),
                    case_count_1(children_count),
                    case_count_2(children_count)
                )

            input = {
                "node": node,
                "parent": parent,
                "self": self
            }
            self = do(input)

        #     return True

        # else:
        #     return False

        return self
