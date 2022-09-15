from eletrodomestico import Eletrodomestico


class Batedeira(Eletrodomestico):
    def __init__(self, cor, voltagem, preco, marca, capacidade, velocidades):
        super().__init__(cor, voltagem, preco, marca)
        self.__capacidade = capacidade
        self.__velocidades = velocidades


batedeira_preta = Batedeira('Preta', 220, 545, 'Black + Decker', 5, 8)
print(f'Esta batedeira custa R$ {batedeira_preta.preco}.')
