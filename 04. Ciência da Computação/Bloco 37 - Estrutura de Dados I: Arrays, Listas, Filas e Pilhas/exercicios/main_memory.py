class MainMemory:
    def __init__(self):
        self.clean()

    def load(self, value):
        self.loaded_memory.append(value)

    def get(self, index):
        try:
            return float(self.loaded_memory[index])
        except IndexError:
            return 0

    def clean(self):
        self.loaded_memory = []


if __name__ == '__main__':
    mem = MainMemory()

    mem.load(10)
    mem.load(25)
    mem.load(40)

    print(mem.loaded_memory)
    print(mem.get(1))
