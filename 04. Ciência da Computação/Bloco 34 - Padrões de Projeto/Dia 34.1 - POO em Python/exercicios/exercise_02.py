class Estatistica:
    def __init__(self, lista):
        self.lista = lista

    def media(self):
        result = sum(self.lista) / len(self.lista)

        return result

    def mediana(self):
        metade = len(self.lista) // 2
        self.lista.sort()

        if len(self.lista) % 2:
            return self.lista[metade]
        else:
            return (self.lista[metade - 1] + self.lista[metade]) / 2.0

    def moda(self):
        counter = {}

        for number in self.lista:
            counter[number] = counter.get(number, 0) + 1

        max_counter = max(counter, key=counter.get)

        return max_counter


list = Estatistica([2, 3, 3, 5, 7, 10])
print(list.media())
print(list.mediana())
print(list.moda())
