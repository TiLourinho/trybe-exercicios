from abc import ABC, abstractmethod


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return '<%s de %s>' % (self.valor, self.naipe)


class IteradorBaralho:
    def __init__(self, cartas, estrategia):
        self.cartas = cartas
        self.estrategia = estrategia
        self.atual = 0

    def __next__(self):
        try:
            result = self.cartas[self.atual]
        except IndexError:
            raise StopIteration
        else:
            self.atual = self.estrategia.proxima_carta(self.atual)
            return result


class IteracaoStrat(ABC):
    @abstractmethod
    def proxima_carta(index):
        raise NotImplementedError


class RegularStrat(IteracaoStrat):
    def proxima_carta(index):
        return index + 1


class InversoStrat(IteracaoStrat):
    def proxima_carta(index):
        return index - 1


class Baralho:
    naipes = 'copas ouros espadas paus'.split()
    valores = 'A 2 3 4 5 6 7 8 9 10 J Q K'.split()

    def __init__(self, estrategia):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]
        self.estrategia = estrategia

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return IteradorBaralho(self._cartas, self.estrategia)
