from rich import print
import sys


class ListaArray:
    def __init__(self):
        self.data = []

    def __len__(self):
        return len(self.data)

    def __str__(self):
        return str(self.data)

    def get(self, index):
        return self.data[index]

    def set(self, index, value):
        self.data.insert(index, value)

    def remove(self, index):
        return self.data.pop(index)

    def update(self, index, value):
        if value in self.data:
            self.data.remove(value)
        return self.set(index, value)


if __name__ == '__main__':
    array = ListaArray()
    array.set(0, "Felipe")
    array.set(1, "Ana")
    array.set(2, "Shirley")
    array.set(3, "Miguel")

    print(array.__len__())
    print(array.__str__())
    print(array.get(0))
    print(array.get(2))
    print("-----")

    index = 0

    while index < len(array):
        print("Index:", index, ", Nome:", array.get(index))
        index += 1

    array_memory_size = sys.getsizeof(array.data)
    print(array_memory_size)

    array.remove(2)
    print(array)

    array.update(0, 'Miguel')
    print(array)

    array.update(1, 'Ana')
    print(array)
