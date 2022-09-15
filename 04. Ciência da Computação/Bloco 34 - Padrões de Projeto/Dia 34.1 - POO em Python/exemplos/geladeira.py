from eletrodomestico import Eletrodomestico


class Geladeira(Eletrodomestico):
    def __init__(self, cor, voltagem, preco, marca, capacidade, qnt_de_portas=1):  # noqa
        super().__init__(cor, voltagem, preco, marca)
        self.capacidade = capacidade
        self.qnt_de_portas = qnt_de_portas


if __name__ == '__main__':
    geladeira_1 = Geladeira('Branca', 220, 2499, 'Consul', 342)
    geladeira_2 = Geladeira('Preta', 220, 4149, 'Brastemp', 443, 2)
    geladeira_3 = Geladeira('Inox', 220, 12249, 'Electrolux', 538, 3)
