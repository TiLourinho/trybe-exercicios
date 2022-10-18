from rich import print


class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

    def __str__(self):
        return f"Node(value={self.value}, next={self.next})"


if __name__ == '__main__':
    simple_node = Node(15)
    print(simple_node)
